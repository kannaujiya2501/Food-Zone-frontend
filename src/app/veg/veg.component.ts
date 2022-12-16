import { Component, OnInit } from '@angular/core';
import { IVeg } from '../iveg';
import { CartService } from '../services/cart.service';
import { VegService } from '../services/veg.service';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  result: IVeg[] = [];
  searchKey:string="";
  public filterCategory : any;

  constructor(private vegservice:VegService, private cartService:CartService) { }

  ngOnInit(): void {

    this.vegservice.getData().subscribe((data: IVeg[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {
        this.filterCategory = data;
        if(a.category === "Veg" || a.category === "Non-Veg"){
          a.category ="veg"
        }
        Object.assign(a, { quantity: 1, total: a.Price })
      });
      console.log(this.result);
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    
  }
    addtocart(dt:any){
      this.cartService.addtocart(dt);
      alert("You Have Successfully Order");
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
