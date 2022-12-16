import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FamousDishesComponent } from './famous-dishes/famous-dishes.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'famous-dishes',component:FamousDishesComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'veg',component:VegComponent},
  {path:'nonveg',component:NonvegComponent},
  {path:'admin-panel',component:AdminPanelComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'signin',component:SigninComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
