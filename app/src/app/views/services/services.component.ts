import { Component, OnInit } from '@angular/core';
import { NavserviceService } from 'src/app/services/navservice.service';
import { FooterserviceService } from 'src/app/services/footerservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private navService:NavserviceService,private footerService:FooterserviceService) {
    
  } 
  ngOnInit() {
  this.navService.hideNavBar()
  this.footerService.hideFooter()
  }

}
