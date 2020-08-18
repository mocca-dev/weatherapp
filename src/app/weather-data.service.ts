import { Injectable } from '@angular/core';
import { WeatherAPIService } from './weather-api.service';
import {
  LocationResponse,
  LocationForecastResponse,
  LocationDayResponse,
} from './intefaces/weather.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private location: LocationResponse;
  private forecast: Subject<LocationForecastResponse> = new Subject<
    LocationForecastResponse
  >();
  private day: Subject<LocationDayResponse> = new Subject<
    LocationDayResponse
  >();

  constructor(private weatherAPIService: WeatherAPIService) {}

  public setLocation(searchTerm: string): void {
    this.weatherAPIService
      .getLocationBySearch(searchTerm)
      .subscribe((locations: LocationResponse[]) => {
        this.location = locations[0];
        if (this.location) {
          this.setForecast(this.location.woeid);
        } else {
          this.forecast.next(null);
        }
      });
  }

  public getLocation(): LocationResponse {
    return this.location;
  }

  public getForecast(): Subject<LocationForecastResponse> {
    return this.forecast;
  }

  private setForecast(id: number): void {
    this.weatherAPIService
      .getLocationById(id)
      .subscribe((forecast: LocationForecastResponse) => {
        this.forecast.next(forecast);
      });
  }
}
