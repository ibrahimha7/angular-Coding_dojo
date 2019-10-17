import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ServiceTaskService} from './service/service-task.service'
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ServiceTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
