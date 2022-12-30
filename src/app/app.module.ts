import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule} from '@angular/common/http';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CustomerListComponent,
    CustomerFormComponent,
    UserRegistrationComponent,
    BookFormComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
