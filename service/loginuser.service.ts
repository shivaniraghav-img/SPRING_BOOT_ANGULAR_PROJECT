import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private  baseurl="http://localhost:9090/user/login";

  
  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<Object>
  {
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
  
  }

}

