import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Customer } from '../models/customer';

import { Offer } from '../models/offer';
import { User } from '../models/user';


import { ContactCustomer } from '../models/contactsCustomer';

// import { HttpModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) 
  {

   }
   
   register(cust : Customer) {
    console.log("register service")
    return this.http.post(`http://localhost:8080/api/v1/customer`, cust);
  }
  getAll() {
    return this.http.get<Customer[]>(`http://localhost:8080/customers`);
    console.log("get all");
  }

  contactUs(contact : ContactCustomer) {
    console.log("register service")
    return this.http.post(`http://localhost:8080/api/v1/contact`, contact);
  }
  getAllContact() {
    return this.http.get<ContactCustomer[]>(`http://localhost:8080/api/v1/contacts`);
    console.log("get all");
  }
  offerCustAdd(offer : Offer) {
    console.log("register service")
    return this.http.post(`http://localhost:8080/api/v1/offer`, offer);
  }
  offersCust() {
    return this.http.get<Offer[]>(`http://localhost:8080/api/v1/offerCust`);
    console.log("get all");
  }
}

