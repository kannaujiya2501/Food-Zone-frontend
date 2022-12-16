import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IProduct } from '../iproduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-famous-dishes',
  templateUrl: './famous-dishes.component.html',
  styleUrls: ['./famous-dishes.component.css']
})
export class FamousDishesComponent implements OnInit {

  result: IProduct[] = [];
  searchKey:string="";
  public filterCategory : any;

  constructor(private api:ApiService, private cartService:CartService) { }

  ngOnInit(): void {

    this.api.getData().subscribe((data: IProduct[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {
        // this.filterCategory = data;
        // if(a.category === "Veg" || a.category === "Non-Veg"){
        //   a.category ="famousdishes"
        // }
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
     
