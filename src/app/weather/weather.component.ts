import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  temp: number;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(){
    var info;
    this.weatherService.getLatestWeather().subscribe(
      data => {
        info = data;
        this.temp = info.main.temp;
      },
      error => {
        console.log(error);
      }
    );
  }

}
