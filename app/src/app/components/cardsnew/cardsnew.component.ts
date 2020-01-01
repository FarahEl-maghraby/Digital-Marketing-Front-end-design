import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interafce/data.interface';

@Component({
  selector: 'app-cardsnew',
  templateUrl: './cardsnew.component.html',
  styleUrls: ['./cardsnew.component.css']
})
export class CardsnewComponent implements OnInit {
  data1: Data[] =
  [{title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',img:'assets/p1.jpg'},
  {title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',img:'assets/p2.jpg'},

  ]
  constructor() { }

  ngOnInit() {
  }

}
