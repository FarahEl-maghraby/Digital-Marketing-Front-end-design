import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {
  visible :boolean;
  constructor() {this.visible = false }

  hideNavBar(){
    this.visible = false;
  }

  showNavBar(){
    this.visible = true;
  }
}
