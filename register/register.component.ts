import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 public userForm:FormGroup; 
 /*  custname: string = "";
  phoneno: string = "";
  occupation: string = "";
  city: string = "";
   state: string = "";
   country: string = "";
   password: string = "";
  acctid: string = ""; */
  constructor( private fb: FormBuilder, private http: HttpClient, private route :Router) {
    // Form element defined below
    this.userForm = this.fb.group({
      custname: new FormControl(null,Validators.compose([Validators.required])),
	  phoneno: new FormControl(null,Validators.compose([Validators.required])),
	  occupation: new FormControl(null,Validators.compose([Validators.required])),
	  city: new FormControl(null,Validators.compose([Validators.required])),
	  state: new FormControl(null,Validators.compose([Validators.required])),
	  country: new FormControl(null,Validators.compose([Validators.required])),
	  password: new FormControl(null,Validators.compose([Validators.required])),
	  acctid: new FormControl(" ",Validators.compose([Validators.required]))
    });
  }
 
 load()
 {
	 var ID = '789'+Math.floor((Math.random() * 1000000) + 1);
	(<HTMLInputElement>document.getElementById("acctid")).value = ID;
	 this.userForm.get("acctid")?.patchValue(ID);
 }
onRegister(){
	 console.log(this.userForm.value);
	 if(this.userForm.value!="")
	{
   this.http.post('http://localhost:8888/customer_reg', this.userForm.value).subscribe(
    (response) => console.log(response))
	 alert("Registered Successfully");
	}
	else{
		alert("Please enter all details!");
	}
	 console.log("okk");
 }
/* onRegister()
{
	this.custname = (<HTMLInputElement>document.getElementById("custname")).value;
	this.phoneno = (<HTMLInputElement>document.getElementById("phoneno")).value;
	this.occupation = (<HTMLInputElement>document.getElementById("occupation")).value;
	this.city = (<HTMLInputElement>document.getElementById("city")).value;
	this.state = (<HTMLInputElement>document.getElementById("state")).value;
	this.country = (<HTMLInputElement>document.getElementById("country")).value;
	this.password = (<HTMLInputElement>document.getElementById("password")).value;
	//this.acctid = (<HTMLInputElement>document.getElementById("acctid")).value;
	//this.acctid =ID;
	//alert(this.user_name+"---"+this.phone+"---"+this.location+"---"+this.emergency_contact+"---"+this.id);
	console.log(this.userForm.value);
	if(this.userForm.value!="")
	{
   // this.http.post('http://localhost:8888/customer_reg', this.userForm.value).subscribe(
     // (response) => console.log(response))
	  // alert("Registered Successfully");
	}
	else{
		alert("Please enter all details!");
	}
} */
 ngOnInit(): void {
  }
}
