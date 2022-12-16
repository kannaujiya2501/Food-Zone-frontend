import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FamousDishesComponent } from './famous-dishes/famous-dishes.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FilterPipe } from './filter.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SigninComponent } from './signin/signin.component';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    FamousDishesComponent,
    CartComponent,
    CheckoutComponent,
    FilterPipe,
    GalleryComponent,
    VegComponent,
    NonvegComponent,
    AdminPanelComponent,
    AdminLoginComponent,
    ThankyouComponent,
    SigninComponent,
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
