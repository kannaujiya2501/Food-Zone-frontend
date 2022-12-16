import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from 'express';
import { IProduct } from '../iproduct';
import { AdminPanelService } from '../services/admin-panel.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  formValue !: FormGroup;

  famous!: any;
  
  food_name:FormControl=new FormControl();
  price:FormControl=new FormControl();
  image_url:FormControl=new FormControl();

  constructor(private route:Router, private apiservice:ApiService,private formbuilder:FormBuilder,private adminpanel:AdminPanelService) { }

  ngOnInit(): void {

    this.apiservice.getData().subscribe((data: IProduct[]) => {
      this.famous = data;
      // for cart use------------------------

      this.famous.forEach((a: any) => {

        Object.assign(a, { quantity: 1, total: a.Price })
      });
      console.log("data done");
    });
  }

  save(){
    let famous: IProduct = {
      food_name:this.food_name.value,
      price:this.price.value,
      image_url:this.image_url.value
    };

    this.adminpanel.adddish(famous);
    alert("Data Saved");
  }

  loadData(){
    this.apiservice.getData().subscribe(famous =>{
      this.famous=famous;

    });
  }
  deleteFood(food: IProduct)
{
  let id : number = 0;

  if(food.food_id == undefined){
  }
  else{
    id=food.food_id;
  }
  this.adminpanel.deleteFood(id);
  this.loadData;
  console.log("Item deleted Successfully");
}


  }

