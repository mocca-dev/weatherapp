import { Component, OnInit, Input } from '@angular/core';
import { ConsolidateWeather } from 'src/app/intefaces/weather.interface';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.css'],
})
export class TodayForecastComponent implements OnInit {
  @Input() forecast: ConsolidateWeather;
  @Input() locationName: string;

  constructor() {}

  ngOnInit(): void {}
}
