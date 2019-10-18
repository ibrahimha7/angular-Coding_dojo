import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get('/tasks')
  }
  addTask(newtask){
    return this.http.post('/tasks', newtask)
  }
  
  getTasksById(id){
    return this.http.get('/tasks/'+id);
  }
  
  editTask(id, task){
    return this.http.put('tasks/'+id, task );
  }
  
  deleteTask(id){
    return this.http.delete('tasks/'+id);
  }
}
