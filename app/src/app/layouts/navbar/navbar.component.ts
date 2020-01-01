import { Component, OnInit } from '@angular/core';
import {NavserviceService} from '../../services/navservice.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden=true;
  constructor(public navService:NavserviceService) { }

  ngOnInit() {
  }
  isShown(){
    this.isHidden = !this.isHidden
  }
}
