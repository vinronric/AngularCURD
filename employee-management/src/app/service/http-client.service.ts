import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public empid:number,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

  getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8087/employees');
  }

  public deleteEmployee(eid) {
    console.log("deleteEmployee is called in http-client.services.ts");
    console.log("eid -> " + eid);
    return this.httpClient.delete<Employee>("http://localhost:8087/employees" + "/"+ eid);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8087/employees", employee);
  }
}