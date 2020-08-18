import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as Highcharts from 'highcharts';
import { TempRange } from 'src/app/intefaces/weather.interface';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css'],
})
export class WeekForecastComponent implements OnInit, OnChanges {
  @Input() temps: number[];
  @Input() dates: string[];
  @Input() tempRange: TempRange;
  public highcharts = Highcharts;

  public chartOptions;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'spline',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: this.dates,
      },
      yAxis: {
        title: {
          text: 'Temperature °C',
        },
        max: this.tempRange.max,
        min: this.tempRange.min,
      },
      tooltip: {
        valueSuffix: ' °C',
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: '',
          data: this.temps,
        },
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      ...this.chartOptions,
      series: [
        {
          name: '',
          data: changes.temps.currentValue,
        },
      ],
      xAxis: {
        categories: changes.dates.currentValue,
      },
      yAxis: {
        title: {
          text: 'Temperature °C',
        },
        max: changes.tempRange.currentValue.max,
        min: changes.tempRange.currentValue.min,
      },
    };
  }
}
