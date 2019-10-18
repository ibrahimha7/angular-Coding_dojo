import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any

  task:any
  newTask:any
  updateTask: any;
  getTaskByid =  false;
  id = ""
  constructor(private httpService: ServiceService) { }


  ngOnInit() {
    this.newTask = { title: "", description: "" }
    //this.updateTask = { title: "", description: "" }
      this.getTasks()
  }

  getTasks() {
    let observable = this.httpService.getTasks()
    observable.subscribe(data => {
      this.tasks = data
    })
  }

  onSubmit() {
    let observable = this.httpService.addTask(this.newTask)
    observable.subscribe(data => {
      this.task = data
    })
    console.log(this.newTask._id)
    this.newTask = { title: "", description: "" }
  }

  GetTask(id){
    this.getTaskByid = true;
    this.id = id;
    this.updateTask = { title: "", description: "" }
    let observable = this.httpService.getTasksById(this.id)
      observable.subscribe(data => {
        this.updateTask = data
        console.log("get",this.updateTask)
      
      })
  }
  
  DeleteTask(id){
    this.id = id;
    let observable = this.httpService.deleteTask(this.id)
      observable.subscribe(data => {
      console.log('deleted', data)
      
      })
  }
  
  EditTask(){
   
    console.log("edit",this.updateTask)
    let observable = this.httpService.editTask(this.id, this.updateTask)
    observable.subscribe((data:any) => {
      this.updateTask = {title: data.title, description: data.description}
      console.log('after', this.updateTask)
    })
    this.getTasks()
    this.id = "" 
  }
  


}