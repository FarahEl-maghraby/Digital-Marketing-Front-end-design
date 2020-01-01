import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';
import { SliderpostComponent } from './components/sliderpost/sliderpost.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from '../app/material-module';
import { ContactComponent } from './views/contact/contact.component';
import { NavcontactComponent } from './layouts/navcontact/navcontact.component';
import { FormComponent } from './components/form/form.component';
import { MapComponent } from './components/map/map.component';
import { DiscussComponent } from './components/discuss/discuss.component';
import { ServicesComponent } from './views/services/services.component';
import { NavserviceComponent } from './layouts/navservice/navservice.component';
import { FooternewComponent } from './layouts/footernew/footernew.component';
import { CardsnewComponent } from './components/cardsnew/cardsnew.component';
import { SlidenewComponent } from './components/slidenew/slidenew.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { NavblogComponent } from './layouts/navblog/navblog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    CardsComponent,
    SliderpostComponent,
    VideoModalComponent,
    ContactComponent,
    NavcontactComponent,
    FormComponent,
    MapComponent,
    DiscussComponent,
    ServicesComponent,
    NavserviceComponent,
    FooternewComponent,
    CardsnewComponent,
    SlidenewComponent,
    BlogsComponent,
    NavblogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
