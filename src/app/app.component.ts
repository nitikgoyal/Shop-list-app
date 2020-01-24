import { Component } from '@angular/core';
import {MessengerService}from './messenger.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pname1="";
  price1="";
  pname2="";
  price2="";
  totalBill:number;
  serverCreated:boolean=false;
  final:string="";
  final1:string="";
  onClick(){
     var msg=new MessengerService;
     this.totalBill=msg.getBill(parseInt(this.price1),parseInt(this.price2));
  this.final="The first product name is:"+this.pname1;
    this.final1="The second product name is:"+this.pname2;
  this.serverCreated=true;
   }
}