import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm:FormGroup; // variable is created of type FormGroup is created
  acctid: string = ""; 
  password: string = "";// Variable is created to show the input value below the button
  //API: http://localhost:7777/login;
  constructor( private fb: FormBuilder, private http: HttpClient, private route :Router) {
    // Form element defined below
    this.userForm = this.fb.group({
      acctid: new FormControl(null,Validators.compose([Validators.required])),
	  password:new FormControl(null,Validators.compose([Validators.required]))
    });
  }

 onLogin()
{
	//this.id=this.userForm.get('id')?.value;
	//this.phone=this.userForm.get('phone')?.value;
	//localStorage.setItem("id",this.id);
	//this.pass = (<HTMLInputElement>document.getElementById("pass")).value;
	//alert(this.id+"---"+this.phone);
	// var formData: any = new FormData();
    //formData.append("username", this.username);
	//formData.append("pass", this.pass);	
	//var obj=JSON.stringify(formData);
	console.log(this.userForm.value);
	if(this.userForm.value!="")
	{
    this.http.post('http://localhost:8888/customer_login', this.userForm.value).subscribe(
      (response) => {console.log(response);
	  var resp=JSON.parse(JSON.stringify(response));
	  alert(resp.body);
	  if(resp.body=="Login Successfull")
	  {
		localStorage.setItem('customer',"customer");
		localStorage.setItem('acctid',this.userForm.get("acctid").value);
		this.route.navigate(["profile"]);
	  }
	  else
		  alert("Please enter correct details!");
	  })
	  }
	else{
		alert("Please enter all details!");
	}
}
 

ngOnInit(): void {
  }
}
