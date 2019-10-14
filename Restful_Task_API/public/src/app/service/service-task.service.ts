import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {

  //here put if you have genral var  #like api url
  taskurl='/tasks';
  constructor(private http:HttpClient) {
    
   }

  getTodos():Observable<Task[]> {
    return this.http.get<Task[]>(`${this.taskurl}`);
  }
  

 
  get3edTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this.http.get('/tasks?id:3');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

}
