export interface LocationResponse {
  title: string;
  location_type: string;
  latt_long: number;
  woeid?: number;
  distance?: number;
}

export interface ConsolidateWeather {
  id: number;
  applicable_date: string;
  max_temp: number;
  min_temp: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
  created: string;
}

interface Source {
  title: string;
  url: string;
}

export interface LocationForecastResponse extends LocationResponse {
  time: any;
  sun: any;
  timezone_name: string;
  parent: LocationResponse;
  consolidated_weather: ConsolidateWeather[];
  sources: Source[];
}

export interface LocationDayResponse {
  air_pressure: number;
  applicable_date: string;
  created: Date;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number;
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
}

export interface TempRange {
  max: number;
  min: number;
}
