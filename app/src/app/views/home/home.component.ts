import { Component, OnInit } from '@angular/core';
import * as $ from 'node_modules/jquery/dist/jquery.js'
import {Data} from '../../interafce/data.interface'
import {NavserviceService} from '../../services/navservice.service'
import {FooterserviceService} from '../../services/footerservice.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data1: Data[] =
[{title:'Data Analysis',description:'It is a long established fact that a reader',img:'assets/p1.jpg'},
{title:'Data Analysis',description:'It is a long established fact that a reader',img:'assets/p2.jpg'},
{title:'Data Analysis',description:'It is a long established fact that a reader',img:'assets/p3.jpg'},
{title:'Data Analysis',description:'It is a long established fact that a reader',img:'assets/p3.jpg'},
]

data: Data[] =
[{title:'Data Analysis',description:'It is a long established fact that a reader',img:'assets/p1.jpg'},
{title:'Data Analysis',description:'It is a long established fact that a reader',img:'assets/p2.jpg'},
{title:'Data Analysis',description:'It is a long established fact that a reader',img:'assets/p3.jpg'},

]
  constructor(private navService:NavserviceService,private footerService:FooterserviceService) {
    
  } 
  ngOnInit() {
  this.navService.showNavBar()
  this.footerService.showFooter()
  }

}
