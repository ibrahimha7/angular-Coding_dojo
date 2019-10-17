import { Component, OnInit } from '@angular/core';
import { ServiceTaskService } from '../../service/service-task.service';
import { Task } from '../../models/Todo';
import { Observable } from 'rxjs';
import { Poki } from '../../models/Poki';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* OnInit {
  //todos: Todo[];
  title="Restful Task";
  pokis:Task[]=[];
  
  constructor(private taskserv: ServiceTaskService) { 
    console.log("This is Pokiiiiiiiiiii");
    console.log(this.pokis);
  }

  ngOnInit() {

    //console.log(this.pokis,"ngonit");
    this.taskserv.getPokemon().subscribe(pokis => {

      console.log(pokis,"before assinging");
      this.pokis = pokis;
      
    });
    
    
  }
  
  
}
 */

 