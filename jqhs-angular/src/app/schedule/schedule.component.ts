import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() {
  }

  times = [
    {name: 'Check In', icon: 'assignment', time: '8:00 AM', group: '1'},
    {name: 'On Ice', icon: 'play_arrow', time: '8:30 AM', group: '1'},
    {name: 'Check In', icon: 'assignment', time: '9:00 AM', group: '2'},
    {name: 'On Ice', icon: 'play_arrow', time: '10:00 AM', group: '2'},
    {name: 'Karate with Kersey', icon: 'play_circle_outline', time: '10:10 AM', group: '1'},
    {name: 'Lunch', icon: 'fastfood', time: '11:10 AM', group: '1'},
    {name: 'Karate with Kersey', icon: 'play_circle_outline', time: '12:10 AM', group: '2'},
    {name: 'Lunch', icon: 'fastfood', time: '1:10 PM', group: '2'},
    {name: 'On Ice', icon: 'play_arrow', time: '12:30 PM', group: '1'},
    {name: 'Check Out', icon: 'assignment', time: '2:10 PM', group: '1'},
  ];

  times2 = [
    {name: 'Check In', icon: 'assignment', time: '8:00 AM', group: '1'},
    {name: 'On Ice', icon: 'play_arrow', time: '8:30 AM', group: '1'},
    {name: 'Check In', icon: 'assignment', time: '9:00 AM', group: '2'},
    {name: 'On Ice', icon: 'play_arrow', time: '10:00 AM', group: '2'},
    {name: 'Karate with Kersey', icon: 'play_circle_outline', time: '10:10 AM', group: '1'},
    {name: 'Lunch', icon: 'fastfood', time: '11:10 AM', group: '1'},
    {name: 'Karate with Kersey', icon: 'play_circle_outline', time: '12:10 AM', group: '2'},
    {name: 'Lunch', icon: 'fastfood', time: '1:10 PM', group: '2'},
    {name: 'On Ice', icon: 'play_arrow', time: '12:30 PM', group: '1'},
    {name: 'Check Out', icon: 'assignment', time: '2:10 PM', group: '1'},
  ];

  ngOnInit() {
  }

}
