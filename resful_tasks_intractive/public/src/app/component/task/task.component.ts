
import { Component, OnInit,Input } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any;
  constructor() { }

  ngOnInit() {
  }


}