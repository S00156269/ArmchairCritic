<<<<<<< HEAD
import { iMDBService } from '../Shared/iMDB.service';
import { FormsModule } from '@angular/forms';
=======
import { RouterModule, Routes } from '@angular/router';
>>>>>>> c5286c51965c0702e14fd78dc0630b64576c6f08
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilmsComponentComponent } from './films-component/films-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { SearchComponent } from './search/search.component';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AuthService } from './shared/auth.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { EditprofileComponent } from './editprofile/editprofile.component';
>>>>>>> c5286c51965c0702e14fd78dc0630b64576c6f08

const appRoutes: Routes = [
  { path: 'login', component: LoginComponentComponent},
  { path: 'register', component: RegisterComponentComponent},
  { path: 'search', component: SearchComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'editprofile', component: EditprofileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponentComponent,
    ListComponentComponent,
    SearchComponent,
    ReviewersComponent,
    ProfileComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    EditprofileComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [iMDBService],
=======
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [AuthService, AngularFireAuth],
>>>>>>> c5286c51965c0702e14fd78dc0630b64576c6f08
  bootstrap: [AppComponent]
})
export class AppModule { 
}
