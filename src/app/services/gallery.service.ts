import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGallery } from '../igallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http:HttpClient) { }

  getData():Observable<IGallery[]>{

    let url="https://localhost:44343/api/gallery";
    console.log("Done");
    return this.http.get<IGallery[]>(url);
         
  }
}