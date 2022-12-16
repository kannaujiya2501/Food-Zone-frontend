import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  addcontact(contact:IContact){
    this.http.post<IContact[]>("",contact,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      } 
}).subscribe(result=>console.log("Data send to Database"));
  }

}
