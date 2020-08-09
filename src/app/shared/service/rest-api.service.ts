import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  showEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/jpa-postgre/showEmployees')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // HttpClient API get() method => Fetch employees list
  showDemo() :Observable<Object> {
    return this.http.get(this.apiURL + '/jpa-postgre/getEmployeeById/1')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
