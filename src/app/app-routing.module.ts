import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminauthGuard } from './adminauth.guard';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { VendorauthGuard } from './vendorauth.guard';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorproductComponent } from './vendorproduct/vendorproduct.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "search", component: SearchComponent, canActivate: [AuthGuard]},
  {path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard]},
  {path: "admin-login", component: AdminloginComponent},
  {path: "admin-home", component: AdminhomeComponent, canActivate: [AdminauthGuard]},
  {path: "vendor-login", component: VendorloginComponent},
  {path: "users", component: UserComponent, canActivate: [AdminauthGuard]},
  {path: "admin-products", component: AdminproductComponent, canActivate: [AdminauthGuard]},
  {path: "vendor-products", component: VendorproductComponent, canActivate: [VendorauthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
