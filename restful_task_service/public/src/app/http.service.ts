import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //4 import http client

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {  // 5 added Dependency injection
    this.getTask(); // 7 call the function to run 
  }
  // 6 create this function get task
  getTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
}
