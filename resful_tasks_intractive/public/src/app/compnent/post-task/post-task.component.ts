import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../http-service.service'

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.css']
})
export class PostTaskComponent implements OnInit {

  constructor(private _httpService: HttpServiceService){}

  ngOnInit() {

  }
  onButtonClickParamcopy(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
  }

  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.postToServer({ data: num });
    observable.subscribe(data => console.log("Got our data!", data));
  }
  
}
