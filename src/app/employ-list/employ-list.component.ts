import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {

  public employees = [] as any;
  public errorMsg :any;



  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void{

    this._employeeService.getEmployees()
      .subscribe(data=> this.employees =data,
                error => this.errorMsg=error);
  }

}
