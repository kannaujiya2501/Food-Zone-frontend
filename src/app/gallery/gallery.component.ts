import { Component, OnInit } from '@angular/core';
import { IGallery } from '../igallery';
import { CartService } from '../services/cart.service';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  result: IGallery[] = [];

  searchKey:string="";
  public filterCategory : any;

  constructor(private galleryservice:GalleryService, private cartservice:CartService) { }

  ngOnInit(): void {

    this.galleryservice.getData().subscribe((data: IGallery[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {

        Object.assign(a, { quantity: 1, total: a.Price })
      });
    });
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  filter(category:string){
    this.filterCategory = this.result
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
