import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/interafce/slider.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  data: Slider[] =
  [{title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin,Progravida nibh vel velit auctor alinean sollicitudin.',img:'assets/p1.jpg',name:'Ahmed'},
  {title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin,Progravida nibh vel velit auctor alinean sollicitudin.',img:'assets/p2.jpg',name:'Farah'},
  
  ]

  data1: Slider[] =
  [{title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin,Progravida nibh vel velit auctor alinean sollicitudin.',img:'assets/p3.jpg',name:'Yassin'},
  {title:'Data Analysis',description:'Progravida nibh vel velit auctor alinean sollicitudin,Progravida nibh vel velit auctor alinean sollicitudin.',img:'assets/p4.jpg',name:'Hamza'},
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
