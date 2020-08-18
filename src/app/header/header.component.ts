import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public locationName = new FormControl('');

  constructor(private weatherService: WeatherDataService) {}

  ngOnInit(): void {}

  public search() {
    this.weatherService.setLocation(this.locationName.value);
  }
}
