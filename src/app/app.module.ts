import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TodayForecastComponent } from './main/today-forecast/today-forecast.component';
import { WeekForecastComponent } from './main/week-forecast/week-forecast.component';
import { IntegerDefaultPipe } from './integer-default.pipe';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodayForecastComponent,
    WeekForecastComponent,
    IntegerDefaultPipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
