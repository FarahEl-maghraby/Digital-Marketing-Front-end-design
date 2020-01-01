import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interafce/data.interface';
import { NavserviceService } from 'src/app/services/navservice.service';
import { FooterserviceService } from 'src/app/services/footerservice.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  data: Data[] =
  [{title:'Data Analysis',description:'December 2019',img:'assets/p1.jpg'},
  {title:'Fully dedicated finding',description:'April 2019',img:'assets/p3.jpg'},
  {title:'Data Analysis',description:'June 2019',img:'assets/p2.jpg'},
  {title:'Data Analysis',description:'May 2019',img:'assets/p3.jpg'},
  
  ]

  data1: Data[] =
  [{title:'Data Analysis',description:'1',img:'assets/p1.jpg'},
  {title:'Digtel Agency',description:'4',img:'assets/p3.jpg'},
  {title:'Digital Marketing',description:'4',img:'assets/p2.jpg'},
  {title:'Data Analysis',description:'7',img:'assets/p3.jpg'},
  {title:'Digital Marketing',description:'8',img:'assets/p3.jpg'},
  {title:'Data Analysis',description:'2',img:'assets/p3.jpg'},
  {title:'Digtel Agency',description:'3',img:'assets/p3.jpg'},
  {title:'Data Analysis',description:'9',img:'assets/p3.jpg'},
  {title:'Digital Marketing',description:'5',img:'assets/p3.jpg'},
  ]
  constructor(private navService:NavserviceService,private footerService:FooterserviceService) {
    
  } 
  ngOnInit() {
  this.navService.hideNavBar()
  this.footerService.hideFooter()
  }

}
