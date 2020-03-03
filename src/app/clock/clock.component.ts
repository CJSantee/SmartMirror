import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent implements OnInit {

  constructor() { }

  time = new Date();
  day: string;
  month: string;
  weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  ngOnInit() {
    setInterval(() => {
       this.time = new Date();
    }, 1000);
    this.day = this.weekdays[this.time.getDay()];
    this.month = this.months[this.time.getMonth()];
  }

}
