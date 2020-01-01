import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navcontact',
  templateUrl: './navcontact.component.html',
  styleUrls: ['./navcontact.component.css']
})
export class NavcontactComponent implements OnInit {
isHidden = true
  constructor() { }

  ngOnInit() {
  }

  isShown(){
    this.isHidden = !this.isHidden
  }
}