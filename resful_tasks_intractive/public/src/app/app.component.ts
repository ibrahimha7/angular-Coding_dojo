import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ineractive';
  recievec: any;
  tasks = []

  constructor(private _httpService: HttpServiceService) { }


  ngOnInit() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      this.recievec = data
      this.tasks = data['tasks']
    })
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

