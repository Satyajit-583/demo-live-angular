import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  //list1:number[];

  constructor(private _numlistservice:NumlistService) { }

  ngOnInit(): void {
    //this.list1=this._numlistservice.getnumber();
  }
  addnumber(value:number){
    //this._numlistservice.addnumber(val);
  }
}
