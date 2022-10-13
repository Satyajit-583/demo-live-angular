import { Component } from '@angular/core';
import{MesseageService} from './messeage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
   // providers:[MesseageService]
})
export class AppComponent {
  title = 'myapptest';
  msg: string="";
  othersms:string="";
  constructor(private _messageservice:MesseageService){

  }
  ngOnInit(){
    //this.msg=this._messageservice.getmesseage()
  }
  getmesseage(){
    this.msg=this._messageservice.getmesseage();
    this.othersms=this._messageservice.getmessagefromotherservice();
  }
}
