import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InfoSpaceComponent } from './info-space/info-space.component';

@NgModule({
  declarations: [ AppComponent, HelloComponent, HomeScreenComponent, InfoSpaceComponent ],
  imports:      [ BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: 'choos', redirectTo: '/choose' },
      { path: 'create', redirectTo: '/create' }
    ]),
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
