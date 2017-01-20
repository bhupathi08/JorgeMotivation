import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `<div><my-home></my-home></div>`
})



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ]
})

export class AppComponent  { name = 'Angular'; }
