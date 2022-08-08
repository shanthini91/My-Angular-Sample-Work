import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {
public delCustForm:FormGroup; // variable is created of type FormGroup is created
  acctid: string = ""; 
  constructor(private fb: FormBuilder, private http: HttpClient) 
  {
		this.delCustForm = this.fb.group({
      acctid: new FormControl(null,Validators.compose([Validators.required]))
    });
  }
onCustDelete(){
	 console.log(this.delCustForm.value);
	 if(this.delCustForm.value!="")
	{
   this.http.delete("http://localhost:8888/customer/"+this.delCustForm.get('acctid').value).subscribe(
    (response) => console.log(response))
	 //alert("Registered Successfully");
	}
	else{
		alert("Please enter all details!");
	}
	 console.log("okk");
 }

  ngOnInit(): void {
	 
  }

}
