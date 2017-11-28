import { IShows } from '../../Shared/iMDB';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { iMDBService } from '../../Shared/iMDB.service';

@Component({
  selector: 'app-films-component',
  templateUrl: './films-component.component.html',
  styleUrls: ['./films-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilmsComponentComponent implements OnInit {
  errorMessage: any;
  filteredShows: IShows[];
  shows: IShows[];

  _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredShows = this.listFilter ? this.filterShows(this.listFilter) : this.shows;
  }

  constructor(private _iMDBService: iMDBService) {}

  filterShows(value: string): IShows[] {
    value = value.toLocaleLowerCase();
    return this.shows.filter((show: IShows) => show.Title.toLocaleLowerCase().indexOf(value) != -1);
  }

  public ngOnInit(): void {
    this._iMDBService.getiMDB().subscribe(shows=>{this.shows=shows 
      this.filteredShows = this.shows;},
      error=>this.errorMessage=<any>error);
  }

}
