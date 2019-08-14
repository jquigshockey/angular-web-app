import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  times = [
    {name: 'Check In', icon: 'assignment', time: '8:00 AM', group: '1'},
    {name: 'On Ice', icon: 'play_arrow', time: '8:30 AM', group: '1'},
    {name: 'Check In', icon: 'assignment', time: '9:00 AM', group: '2'},
    {name: 'On Ice', icon: 'play_arrow', time: '9:30 AM', group: '2'},
    {name: 'Karate with Kersey', icon: 'play_circle_outline', time: '8:00 AM', group: '1'},
    {name: 'Lunch', icon: 'fastfood', time: '8:00 AM', group: '1'},
    {name: 'Karate with Kersey', icon: 'play_circle_outline', time: '8:00 AM', group: '1'},
    {name: 'Lunch', icon: 'fastfood', time: '8:00 AM', group: '1'},
  ];

  ngOnInit() {
  }

}
