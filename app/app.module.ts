import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customer/customers.component';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CustomerComponent, CustomersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
