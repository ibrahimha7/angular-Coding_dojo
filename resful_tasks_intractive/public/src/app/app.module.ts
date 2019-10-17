import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostTaskComponent } from './compnent/post-task/post-task.component';
import { HttpServiceService } from './http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PostTaskComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
