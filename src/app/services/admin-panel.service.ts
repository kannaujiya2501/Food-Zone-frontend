import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {

  constructor(private http:HttpClient) { }

  adddish(data:IProduct){
    this.http.post<IProduct[]>("https://localhost:44343/api/famousdish",data,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      } 
}).subscribe(result=>console.log("Data send to Database"));
  }

  deleteFood(id:number)
  {
    this.http.delete("https://localhost:44343/api/famousdish/"+id,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=>console.log("Food Item deleted Successfully"));
  }

  }

  