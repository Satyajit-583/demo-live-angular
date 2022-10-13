import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {FormGroup,FormControl,FormBuilder,NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  //preserveWhitespaces:true
  //styles:['h1{background-colour:orange}']

})
export class EmployeeComponent implements OnInit {
  data:string='chandan';
  constructor(private router:Router) { }
  student(){
    this.router.navigate(['/student']);
  }
  ngOnInit(): void {
  }
   employee:any=[

   ]
}
