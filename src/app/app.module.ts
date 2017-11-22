import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http} from '@angular/http';


import { AppComponent } from './app.component';
import { FilmsComponentComponent } from './films-component/films-component.component';
import { ListComponentComponent } from './list-component/list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponentComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(/* private http:Http */) {}

  searchMovie(MovieTitle:string) {
    console.log(MovieTitle);
    // this.http.get("https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=b1486a6362ec4507649074230d7aa50b")
    // You can create a javascript file and call it from here

    var data = "{}";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://api.themoviedb.org/3/movie/2/images?language=en-US&api_key=b1486a6362ec4507649074230d7aa50b");

    xhr.send(data);
  }
}
