import { Component, OnInit } from '@angular/core';
import {FooterserviceService} from '../../services/footerservice.service'
import { NavserviceService } from 'src/app/services/navservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private navService:NavserviceService,private footerService:FooterserviceService) {
    
  } 
  ngOnInit() {
  this.navService.hideNavBar()
  this.footerService.showFooter()
  }

}
