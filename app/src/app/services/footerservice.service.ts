import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterserviceService {
isHidden :boolean
  constructor() { this.isHidden=false}

  showFooter(){
    this.isHidden = true
  }

  hideFooter(){
    this.isHidden=false
  }
}
