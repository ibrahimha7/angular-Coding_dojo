import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

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
  pokiurl: String = 'http://localhost:8000/tasks';


  /* constructor(private http: HttpClient) { 
    console.log("serive constactor getting api",this.pokiurl);
    this.getPokemon();
    console.log("Constrctor back to work");
  }

  getPokemon():Observable<Task[]> {
    console.log("service get pokemon function",this.http.get<Task[]>(`${this.pokiurl}`));

    return this.http.get<Task[]>(`${this.pokiurl}`);
    
  } */

  constructor(private _http: HttpClient) {

  }

  getTasks() {
    return this._http.get('/tasks')
  }

  postToServer(num) {
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!copy
    return this._http.post('/tasks', num);
  }


}
