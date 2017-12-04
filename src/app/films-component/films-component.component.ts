import { IShows } from '../films-component/iMDB';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { iMDBService } from '../shared/iMDB.service';

@Component({
  selector: 'app-films-component',
  templateUrl: './films-component.component.html',
  styleUrls: ['./films-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilmsComponentComponent implements OnInit {
  errorMessage: any;
  imageWidth: number = 100;
  imageMargin: number = 4;


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
    return this.shows.filter((show: IShows) => show.original_title.toLocaleLowerCase().indexOf(value) != -1);
  }
  shows: any[];
  filteredShows: IShows[];
  posterURL: string;
  // coming back as an oject insteadof an array
  // Take it in as an any and try to adapt the Ishows interface on it
  
  getUrl(value)
  {    
    return "https://image.tmdb.org/t/p/w1280" + value;
  }
  public ngOnInit(): void {
    this._iMDBService.getiMDB().subscribe( shows => {
      this.shows=shows.results, 
      this.filteredShows = this.shows
    },
      error=>this.errorMessage=<any>error);
  }

}
