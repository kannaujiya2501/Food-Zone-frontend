import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  famous: IProduct[]=[];
  grandTotal!: number;
  dateObj= Date.now();
  constructor(private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getdish()
    .subscribe(res=>{
      this.famous = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

  }

}
