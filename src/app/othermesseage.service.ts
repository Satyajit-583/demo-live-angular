import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OthermesseageService {

  constructor() {}
    getothermessage(){
      return "messeage from other device ";
    }
   
}
