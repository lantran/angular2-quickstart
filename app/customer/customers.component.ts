import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]

})
export class CustomersComponent implements OnInit {
    customers: any[];
    
    constructor(private _customerService: CustomerService) { }

    ngOnInit() { 
        this.customers = this._customerService.getCustomers();
    }
}