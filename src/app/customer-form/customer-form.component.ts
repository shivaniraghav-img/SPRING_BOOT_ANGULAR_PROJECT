import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../service/customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent  {

  customer: Customer ;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private customerService: CustomerService) {
    this.customer = new Customer();
  }

  onSubmit() {
    this.customerService.save(this.customer).subscribe(result => this.gotoCustomerList());
  }

  gotoCustomerList() {
    this.router.navigate(['/customer']);
  }
}





/*customer: Customer = new Customer;
  constructor(private customerService : CustomerService,){}
  ngOnInit(): void{

   }

   addCustomerData(){
    this.customerService.addCustomerData(this.customer).subscribe(data=>{
      alert("Customer Data Inser Successfully")
     
    },error=>alert("Sorry Unable To Insert Customer Data"))
    
   }*/
  


 


