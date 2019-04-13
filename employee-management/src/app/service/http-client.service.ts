import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    let username='vinoth'
    let password='password'

    console.log("getEmployees is called in http-client.services.ts");
    console.log("username -> " + username);
    console.log("password -> " + password);
     //Angular basic Authentication
    //return this.httpClient.get<Employee[]>('http://localhost:8087/employees');
    //Spring Boot Basic Authentication
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    console.log("headers -> " + headers);
    return this.httpClient.get<Employee[]>('http://localhost:8087/employees',{headers});
  }

  public deleteEmployee(eid) {

    let username='vinoth'
    let password='password'

    console.log("deleteEmployee is called in http-client.services.ts");
    console.log("eid -> " + eid);
    //Angular basic Authentication
    //return this.httpClient.delete<Employee>("http://localhost:8087/employees" + "/"+ eid);
    //Spring Boot Basic Authentication
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>("http://localhost:8087/employees" + "/"+ eid,{headers});
  }

  public createEmployee(employee) {

    let username='vinoth'
    let password='password'

    //Angular basic Authentication
    //return this.httpClient.post<Employee>("http://localhost:8087/employees", employee);
    //Spring Boot Basic Authentication
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("http://localhost:8087/employees", employee,{headers});
  }
}