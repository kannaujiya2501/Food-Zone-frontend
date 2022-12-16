import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICheckout } from '../icheckout';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order! : ICheckout[];
  
  public famous:any[]=[];

  formValue !: FormGroup;
  checkoutData !: any;
  checkout !:any; 

  fullname:FormControl = new FormControl();
   email:FormControl = new FormControl();
   address:FormControl = new FormControl();
   city:FormControl = new FormControl();
   mobile:FormControl = new FormControl();
   state:FormControl = new FormControl();
   zip:FormControl = new FormControl();

  public grandTotal!:number;
  public totalItem: number=0;
  checkoutForm: FormGroup;
  submitted = false;
  checkoutInfoService: any;

  constructor(private cartService: CartService ,private formBuilder: FormBuilder,private router:Router,private service:CheckoutService) {
    this.checkoutForm=this.formBuilder.group({
      fullname:new FormControl(["",Validators.required,  Validators.minLength(3), Validators.maxLength(10),
      Validators.pattern("[a-zA-Z].*")]),
      email: new FormControl(["",Validators.required, Validators.email]),
      address: new FormControl(["",Validators.required,Validators.minLength(6), Validators.maxLength(30),
      Validators.pattern("[a-zA-Z].*")]),
      city:new FormControl(["",Validators.required,Validators.minLength(3), Validators.maxLength(10),
      Validators.pattern("[a-zA-Z].*")]),
      mobile:new FormControl(["",Validators.required, Validators.minLength(10), 
      Validators.pattern("[0-9]*") , Validators.maxLength(10)]),
      state:new FormControl(["",Validators.required, Validators.minLength(2), Validators.maxLength(10),
      Validators.pattern("[a-zA-Z].*")]),
      zip:new FormControl(["",Validators.required, Validators.minLength(6), 
      Validators.pattern("[0-9]*"), Validators.maxLength(6)]),
      
    });
    
  }

  save(){
    
    let checkout: ICheckout = {
      fullname:this.fullname.value,
      email:this.email.value,
      address:this.address.value,
      city:this.city.value,
      mobile:this.mobile.value,
      state:this.state.value,
      zip:this.zip.value
    };
    
  
    if((checkout.fullname && checkout.email && checkout.address && checkout.city && checkout.mobile && checkout.state && checkout.zip)!=null && (checkout.fullname && checkout.email && checkout.address && checkout.city && checkout.mobile && checkout.state && checkout.zip)!=""&& checkout.mobile.length==10){
      this.service.addchecks(checkout);
      this.paynow();   
      this.router.navigate(['/thankyou'])      
      alert("Data Saved");
    }
    else{
      alert("Kindly fill all the required details.");
    }
    
  }

  ngOnInit(): void {
 
    this.cartService.getdish()
    .subscribe(res=>{
      this.famous = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

this.cartService.getdish()
.subscribe(res=>{
  this.totalItem=res.length;
})
  }
    
      inc(famous:any){
        if(famous.quantity!=5){
          famous.quantity+=1;
        }
      }
    
      dec(famous:any){
        if(famous.quantity!=1){
          famous.quantity-=1;
        }
      }

      //razorpay payment integration

  message:any = "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_26vH0d1Qbw9XKx",
    "amount": this.grandTotal,
    "name": "Swaraj Mehunkar",
    "description": "Web Development",
    "image": "",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  paynow() {
    this.paymentId = '';
  this.error = '';
      this.options.amount = this.grandTotal*100;//paise
            this.options.prefill.name = "Swaraj Mehunkar";
            this.options.prefill.email = "swaraj.mehunkar3388@gmail.com";
            this.options.prefill.contact = "9561320192";
            var rzp1 = new Razorpay(this.options);
            rzp1.open();
            rzp1.on('payment.failed', function (response: any){
                // Todo - store this information in the server
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
                //this.error = response.error.reason;
            }
        );
    }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
  }

}

