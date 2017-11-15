import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmsComponentComponent } from './films-component/films-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponentComponent,
    ListComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
