import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interafce/data.interface';

@Component({
  selector: 'app-slidenew',
  templateUrl: './slidenew.component.html',
  styleUrls: ['./slidenew.component.css']
})
export class SlidenewComponent implements OnInit {
  data: Data[] =
  [{title:'Ahmed Nasser',description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',img:'assets/p1.jpg'},
  {title:'Farah Amr',description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',img:'assets/p2.jpg'},
  {title:'Yassin amr',description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',img:'assets/p3.jpg'},
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
