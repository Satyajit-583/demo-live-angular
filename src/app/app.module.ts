import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { EmployeeComponent } from './employee/employee.component';
import{MyserviceService} from './myservice.service';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MesseageService} from'./messeage.service';
import { OthermesseageService } from './othermesseage.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NumlistService } from './numlist.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MypipePipe,
    StudentComponent,
    StudentdetailsComponent,
    PagenotfoundComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule  

    
  ],
  providers: [MesseageService,OthermesseageService,NumlistService],
  bootstrap: [ AppComponent]
})
export class AppModule {

  constructor()
  {
    console.log(" hi this is module");
    
  }
 }
