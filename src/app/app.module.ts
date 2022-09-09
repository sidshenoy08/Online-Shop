import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AdminauthGuard } from './adminauth.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorauthGuard } from './vendorauth.guard';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { OrderbyPipe } from './orderby.pipe';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { ProductService } from './product.service';
import { VendorproductComponent } from './vendorproduct/vendorproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    VendorloginComponent,
    LandingComponent,
    UserComponent,
    OrderbyPipe,
    AdminproductComponent,
    VendorproductComponent,
    CheckoutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
  ],
  providers: [AuthGuard, AdminauthGuard, VendorauthGuard, HttpClient, UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
