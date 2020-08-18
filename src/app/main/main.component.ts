import { Component, OnInit } from '@angular/core';

import { WeatherDataService } from '../weather-data.service';
import { ConsolidateWeather, TempRange } from '../intefaces/weather.interface';
import { MaxLengthValidator } from '@angular/forms';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public forecast: ConsolidateWeather;
  public weekForecastTemps: number[];
  public weekForecastDates: string[];
  public tempRange: TempRange = { max: 0, min: 0 };
  public temp: number = 0;
  public locationName = 'Select a location, please';

  constructor(
    private weatherService: WeatherDataService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe((forecast) => {
      if (forecast) {
        this.forecast = forecast.consolidated_weather[0];

        this.weekForecastTemps = forecast.consolidated_weather.map(
          (consolidate) => Math.trunc(consolidate.the_temp)
        );
        this.weekForecastDates = forecast.consolidated_weather.map(
          (consolidate) => {
            const splittedDate = consolidate.applicable_date
              .slice(5)
              .split('-');
            return splittedDate[1] + '/' + splittedDate[0];
          }
        );

        const maxTemps = forecast.consolidated_weather.map(
          (consolidate) => consolidate.max_temp
        );
        const minTemps = forecast.consolidated_weather.map(
          (consolidate) => consolidate.min_temp
        );
        this.tempRange = {
          max: Math.max(...maxTemps),
          min: Math.max(...minTemps),
        };

        this.locationName = `${forecast.title}, ${forecast.parent.title}`;
      } else {
        this.forecast = null;
        this.locationName = "We couldn't find the location";
        this.weekForecastTemps = null;
      }
      this.spinnerService.setShow(false);
    });
  }
}
