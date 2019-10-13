import { Component } from '@angular/core';
import {HttpService} from './pokiServie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon';
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasksFromService();
  }
  tasks = [];
  getTasksFromService() {
    let observable = this._httpService.getPokemon();
   
  }
}