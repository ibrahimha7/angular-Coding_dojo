import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RateComponent } from './compnents/rate/rate.component';

import {ServiceService} from './service.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    //ServiceService,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
