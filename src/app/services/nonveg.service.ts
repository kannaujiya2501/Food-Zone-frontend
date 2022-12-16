import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INonveg } from '../inonveg';

@Injectable({
  providedIn: 'root'
})
export class NonvegService {

  constructor(private http:HttpClient) { }

  getData():Observable<INonveg[]>{

    let url="https://localhost:44343/api/nonveg";
    console.log("Done");
    return this.http.get<INonveg[]>(url);
         
  }

}
