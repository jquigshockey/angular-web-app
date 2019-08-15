import { Component, OnInit } from '@angular/core';

export interface Player {
  id: number;
  name: string;
  present: number;
}

const ITEM_DATA: Player[] = [
  {id: 1, name: 'Adam, Tronchin', present: 1},
  {id: 1, name: 'Sebastien, Tronchin', present: 0},
];

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  displayedColumns: string[] = ['name', 'presence'];

  dataSource = ITEM_DATA;

  searchValue = '';

  onAddItem(){

  }
}
