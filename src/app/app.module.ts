import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployListComponent } from './employ-list/employ-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {HttpClientModule}from '@angular/common/http';
import { OperatorsComponent } from './operators/operators.component'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployListComponent,
    EmployeeDetailComponent,
    OperatorsComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
