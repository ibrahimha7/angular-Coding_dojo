import { Component, OnInit, ViewChild } from '@angular/core';
import { Url } from 'url';
import { Cake } from 'src/app/models/Cake';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  title = 'Rate My Cake';


  cake: Cake = {
    rate: null,
    img: '',
    name: '',
    avg_rating: null,
    comments: ''
  }
  cakes: Cake[];

  //@ViewChild('cakeForm') form:any;


  constructor() { }

  ngOnInit() {
    this.cakes=[
      {
        name:'choclate Cake',
        img:'img.png',
        rate:5-5,

      },
      {
        name:'berry Cake',
        img:'img.png',
        rate:5-5,
        
      },
      {
        name:'panCake',
        img:'img.png',
        rate:5-5,
        
      },


    ]
  }

  onSubmit() {

  }

  addCake(){
    this.cakes.push(this.cake)
    console.log("New Cake is made: ",this.cake)
  }


}
