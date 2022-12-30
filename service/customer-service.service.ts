import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { Customer } from '../model/customer';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService{
    private usersUrl: string;

  constructor(private http:HttpClient) { 
    this.usersUrl ='http://localhost:9090/customers';
  }

  public findAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.usersUrl);
  }
  public save(customer: Customer){
    return this.http.post<Customer>(this.usersUrl, customer);
  }
  public update(customer: Customer,cId:number): Observable<Object>{
    return this.http.put(`${this.usersUrl}/${cId}`,customer);
  }

  public delete(cId:number):Observable<Object>{
    return this.http.delete(`${this.usersUrl}/${cId}`);
  }
} 

/*
 baseUrl = 'http://localhost:9090/customers';

 constructor(private httpClient: HttpClient){}

 addCustomerData(customer :Customer){
  console.log(customer);
  return this.httpClient.post(`${this.baseUrl}`,customer);

 }
  }*/

 
