import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   baseUrl="http://localhost:9090/user/register";
  constructor(private httpCient:HttpClient) { }

  registerUser(user:User): Observable<Object>{
     console.log(user);
     return this.httpCient.post(`${this.baseUrl}`,user)
  }
}
