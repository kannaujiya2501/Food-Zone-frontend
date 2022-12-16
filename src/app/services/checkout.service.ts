import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICheckout } from '../icheckout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }

  addchecks(checkout:ICheckout){
      this.http.post<ICheckout[]>("https://localhost:44343/api/checks",checkout,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      } 
}).subscribe(result=>console.log("Data send to Database"));
  
  }
}
