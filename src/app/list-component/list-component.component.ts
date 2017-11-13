import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
