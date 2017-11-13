import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-films-component',
  templateUrl: './films-component.component.html',
  styleUrls: ['./films-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilmsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
