import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../service/register.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
   
  user:User = new User();
  constructor(private registerService : RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user)
    this.registerService.registerUser(this.user).subscribe(data=>{
      alert("Successfully User Is Register")
    },error=>alert("Sorry User Is Not Register"))
    
    }
  }

