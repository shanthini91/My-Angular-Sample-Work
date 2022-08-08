import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 public userForm:FormGroup; // variable is created of type FormGroup is created
  username: string = ""; 
  pass: string = "";// Variable is created to show the input value below the button
  //API: http://localhost:7777/login;
  constructor( private fb: FormBuilder, private route :Router) {
    // Form element defined below
    this.userForm = this.fb.group({
      username: new FormControl(null,Validators.compose([Validators.required])),
	  pass:new FormControl(null,Validators.compose([Validators.required]))
    });
  }
  onAdminLogin()
  {
	this.username=this.userForm.get('username')?.value;
	this.pass=this.userForm.get('pass')?.value;
		if(this.username=="admin" && this.pass=="admin")
		{
			localStorage.setItem('admin',"admin");
			alert("Admin Login Success");
			 this.route.navigate(["adminprofile"]);
		}
		else
		{			
			alert("Enter correct credentials!");			
		}
  }
 
  ngOnInit(): void {
  }

}
