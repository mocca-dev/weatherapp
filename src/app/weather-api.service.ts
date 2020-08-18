import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

import {
  LocationResponse,
  LocationForecastResponse,
  LocationDayResponse,
} from './intefaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {
  private apiURL = '/api/';

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) {}

  getLocationBySearch(query: string): Observable<LocationResponse[]> {
    this.spinnerService.setShow(true);
    return this.http.get<LocationResponse[]>(
      this.apiURL + 'location/search/?query=' + query
    );
  }

  getLocationById(weoid: number): Observable<LocationForecastResponse> {
    this.spinnerService.setShow(true);
    return this.http.get<LocationForecastResponse>(
      this.apiURL + 'location/' + weoid + '/'
    );
  }

  getTodayForecast(weoid: number): Observable<LocationDayResponse> {
    this.spinnerService.setShow(true);
    return this.http.get<LocationDayResponse>(
      this.apiURL + 'location/' + weoid + '/' + this.formatDate() + '/'
    );
  }

  private formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
  }
}
