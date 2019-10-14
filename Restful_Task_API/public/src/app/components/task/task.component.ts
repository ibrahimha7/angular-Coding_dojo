import { Component, OnInit } from '@angular/core';
import { ServiceTaskService } from '../../service/service-task.service';
import { Task } from '../../models/Todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //todos: Todo[];
  title="Restful Task"
  todos:Task[]=[];

  poki=[];
  constructor(private taskserv: ServiceTaskService) { }

  ngOnInit() {
    console.log('this is component work working');
    this.getTask();
  }
  getTask(){
    this.taskserv.getTodos().subscribe(todos => {
      this.todos = this.todos;
    });
  }
  
}
