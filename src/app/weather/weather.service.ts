import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q=Nashville,Tennessee&appid=17b2b8ad866242f044b3b1e14d3585ce&units=imperial";
  //environment.WEATHER_URL;

  constructor(private http: HttpClient) { }

  getLatestWeather(): Observable<any[]> {
    return this.http.get<any[]>(this.WEATHER_URL);
  }

}
