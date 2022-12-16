import { Component, OnInit } from '@angular/core';
import { INonveg } from '../inonveg';
import { CartService } from '../services/cart.service';
import { NonvegService } from '../services/nonveg.service';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit {
  result: INonveg[] = [];
  searchKey:string="";
  public filterCategory : any;

  constructor(private nonvegservice:NonvegService, private cartService:CartService) { }

  ngOnInit(): void {

    this.nonvegservice.getData().subscribe((data: INonveg[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {
        this.filterCategory = data;
        if(a.category === "Veg" || a.category === "Non-Veg"){
          a.category ="nonveg"
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