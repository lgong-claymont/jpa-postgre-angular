import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/service/rest-api.service";
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any = [];

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { 
    this.showEmployees();
  }

  showEmployees() {
    this.restApi.showEmployees().subscribe((data: {}) => { this.employees = data; })
  }

}
