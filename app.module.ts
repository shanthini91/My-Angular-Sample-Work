import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { DepositeComponent } from './deposite/deposite.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { CustomernavbarComponent } from './customernavbar/customernavbar.component';
import { ViewbalanceComponent } from './viewbalance/viewbalance.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { ViewlogsComponent } from './viewlogs/viewlogs.component';
import { DeletelogsComponent } from './deletelogs/deletelogs.component';


@NgModule({
  declarations: [
    AppComponent,    
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FooterComponent,
    AdminComponent,
    AdminprofileComponent,
    HeaderComponent,
    NavbarComponent,
    ListuserComponent,
    AppoinmentComponent,
    AdminnavbarComponent,
    DepositeComponent,
    WithdrawComponent,
    TransferComponent,
    CustomernavbarComponent,
    ViewbalanceComponent,
    DeleteaccountComponent,
    AccountinfoComponent,
    DeletecustomerComponent,
    CustomerinfoComponent,
    ViewlogsComponent,
    DeletelogsComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule.forRoot([
	{path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'adminprofile', component: AdminprofileComponent},
	{path: 'admin', component: AdminComponent},
	{path: 'withdraw', component: WithdrawComponent},
	{path: 'transfer', component: TransferComponent},
  {path: 'list', component: ListuserComponent},
  {path: 'deposite', component: DepositeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'acctinfo', component: AccountinfoComponent},
	{path: 'logs', component: ViewlogsComponent},
	{path: 'delacc', component: DeleteaccountComponent},
  {path: 'dellogs', component: DeletelogsComponent},
  {path: 'balance', component: ViewbalanceComponent},
  {path: 'custinfo', component: CustomerinfoComponent},
  {path: 'delcust', component: DeletecustomerComponent},
    {path: '**', component: PageNotFoundComponent}
  ]),
  FormsModule,
  ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
