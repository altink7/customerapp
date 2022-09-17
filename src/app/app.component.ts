import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer'
import { CustomerService } from './customer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'customerapp';
  public customers!: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }


  public getCustomers(): void{
    this.customerService.getCustomers().subscribe(
        (response: Customer[]) => {
          this.customers =response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }

    );
  }

  
}
