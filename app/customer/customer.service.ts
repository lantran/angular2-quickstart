import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }
    
    getCustomers(){
        return [
            {id: 1, name:'Ward'},
            {id: 2, name:'Ken'},
            {id: 3, name:'Eric'},
            {id: 4, name:'Sally'},
            {id: 5, name:'Emmet'}
        ];
    }


}