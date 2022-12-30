import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoginuserService } from '../../../service/loginuser.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  implements OnInit {
  
  

  user:User = new User();
 
 constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
       alert("Login Successfully")
      },error=>alert("Sorry Please  Enter Correct UserId And Password"))
    }
   
}