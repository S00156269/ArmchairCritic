import { iMDBService } from '../Shared/iMDB.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmsComponentComponent } from './films-component/films-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { SearchComponent } from './search/search.component';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponentComponent,
    ListComponentComponent,
    SearchComponent,
    ReviewersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [iMDBService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
