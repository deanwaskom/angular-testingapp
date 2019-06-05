import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InfoSpaceComponent } from './info-space/info-space.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeScreenComponent, InfoSpaceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
