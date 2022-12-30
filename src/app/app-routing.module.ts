import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [{path:'',component:UserLoginComponent},
{path:'customer',component:CustomerFormComponent},
{path:'user-register',component:UserRegistrationComponent},
{path:'customerlist',component:CustomerListComponent},
{path:'books',component:BookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
