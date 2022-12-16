import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public searchTerm:string='';
 
  public totalItem :number=0;
  constructor(private route:ActivatedRoute,private router:Router, private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getdish()
    .subscribe(res=>{
    this.totalItem = res.length;
    })
  }
  
    search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
    console.log(this.searchTerm);
  }

}
