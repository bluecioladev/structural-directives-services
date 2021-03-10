import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){

    return [
      { "id": 1, "name": "Andrew ", "age" : 26 },
      { "id": 2, "name": "Brandom ", "age" : 28 },
      { "id": 3, "name": "Chirstian", "age" : 29  },
      { "id": 4, "name": "Elena ",  "age" : 30 },
  
    ];
  }
}
