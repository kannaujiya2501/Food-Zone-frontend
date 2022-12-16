import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public cartItemList:IProduct[]=[];
  public famousdishList= new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");  

  constructor() {}

  getdish(){
 return this.famousdishList.asObservable();
  }

  setdish(famousdish:any){
    this.cartItemList.push(...famousdish);
    this.famousdishList.next(famousdish);

     }

     addtocart(famousdish : any)
     {
      const itemIndex = this.cartItemList.findIndex(item => item.food_id === famousdish.food_id);
      if (itemIndex === -1) {
        //if cart is empty then add product into cart
      this.cartItemList.push(famousdish);
      
      }
  
      else {
        //if there an item existing then just add up the quantity and not duplicating it
        // this.cartItemList[itemIndex]. = this.cartItemList[itemIndex].quantity + product.quantity;
      }
      this.famousdishList.next(this.cartItemList.slice(0));
      this.getTotalPrice();//calling total price
    }
     
    
     removecartItem(famousdish:any){
      for(let i=0;i<this.cartItemList.length;i++){
        if(this.cartItemList[i].food_id === famousdish.food_id){
        this.cartItemList.splice(i,1);
        }
      }
      this.famousdishList.next(this.cartItemList);
     }
     removeAllcart(){
       this.cartItemList =[]
       this.famousdishList.next(this.cartItemList);

     }
     
     getTotalPrice() : number{
      let grandTotal =0;
      this.cartItemList.map((a:any)=>{
        grandTotal += Number(a.price*a.quantity);
        console.log(grandTotal);
      })
      return grandTotal;
    }
     
     }
  
