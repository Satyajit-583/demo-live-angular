import { Injectable } from '@angular/core';
import { OthermesseageService } from './othermesseage.service';

      @Injectable({
        providedIn: 'root'
      })
export class MesseageService {
  [x: string]: any;
othersmg:string="";
  constructor( private_othermessageService:OthermesseageService) { }
  getmesseage(){
    return "sahoo soft solution";
  }
  getmessagefromotherservice(){
   // this.othersmg=this._othermessageService.getothermessage();
    return this.othersmg;
  }
}
