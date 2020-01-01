import { Component, OnInit } from '@angular/core';
import { SliderPost } from 'src/app/interafce/sliderpost.interface';

@Component({
  selector: 'app-sliderpost',
  templateUrl: './sliderpost.component.html',
  styleUrls: ['./sliderpost.component.css']
})
export class SliderpostComponent implements OnInit {
  data: SliderPost[] =
  [{title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin,Progravida nibh vel velit auctor alinean sollicitudin.',img:'assets/s1.jpg',name:'Ahmed',profile:'assets/p1.jpg'},
  {title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin,Progravida nibh vel velit auctor alinean sollicitudin.',img:'assets/s2.jpg',name:'Farah',profile:'assets/p2.jpg'},
  {title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin,Progravida nibh vel velit auctor alinean sollicitudin.',img:'assets/s3.jpg',name:'Yassin',profile:'assets/p3.jpg'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
