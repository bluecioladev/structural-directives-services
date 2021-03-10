import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public  employees  = [] as any;

  constructor( private _employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employees=this._employeeService.getEmployees();
  }

}
