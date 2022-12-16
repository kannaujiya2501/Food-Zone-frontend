import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVeg } from '../iveg';

@Injectable({
  providedIn: 'root'
})
export class VegService {

  constructor(private http:HttpClient) { }

  getData():Observable<IVeg[]>{

    let url="https://localhost:44343/api/veg";
    console.log("Done");
    return this.http.get<IVeg[]>(url);
         
  }
}
