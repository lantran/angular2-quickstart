import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx'

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]

})
export class CustomersComponent implements OnInit {
    // customers : Promise<any[]>;
    customers: any[]; 

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        // Rx observable version with subscribe function to a customer array
        this._customerService.getCustomers_RxObservable()
            .subscribe(
                // if works
                (customers) => this.customers = customers,
                // error
                (err) => { console.log(err);}
            );

        // Straight up promise to array 
        // this._customerService.getCustomers()
        //     .then((customers) => this.customers = customers)
        //     .catch(err => {
        //         console.log(err);
        //         // return Observable.of(err);
        //     });

        // Promise<any[]>
        // this.customers = this._customerService.getCustomers()
        //     .catch(err => {
        //         console.log(err);
        //     });

        // Rx observable version
        //  this.customers = this._customerService.getCustomers_RxObservable()
        //     .catch(err => {
        //         console.log(err);
        //         return Observable.of(err);
        //     });
    }
}