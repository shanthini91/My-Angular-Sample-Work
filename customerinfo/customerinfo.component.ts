import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent implements OnInit {
	public viewCustForm:FormGroup;
acctid : string ="";
custname : string ="";
phoneno : string ="";
password : string ="";
occupation : string ="";
city : string ="";
country : string ="";
state : string ="";
  public rows: Array<{acctid: string, custname: string, phoneno: string,password: string, occupation: string, city: string, country: string, state: string}> = [];
  constructor(private fb: FormBuilder, private http: HttpClient) 
  {
	  this.viewCustForm = this.fb.group({
      acctid: new FormControl(null,Validators.compose([Validators.required]))
    });
  }
onCustInfo(){
	 console.log(this.viewCustForm.value);
	 if(this.viewCustForm.value!="")
	{
   this.http.get("http://localhost:8888/customer_info/"+this.viewCustForm.get('acctid').value).subscribe(
    (response) => {
	var resp=JSON.parse(JSON.stringify(response));
	//console.log(resp.acctid);
	this.acctid=resp.acctid;
	this.custname=resp.custname;
	this.phoneno=resp.phoneno;
	this.password=resp.password;
	this.occupation=resp.occupation;
	this.city=resp.city;
	this.country=resp.country;
	this.state=resp.state;
	
	})
	
	}
	else{
		alert("Please enter all details!");
	}
	 console.log("okk");
 }
  ngOnInit(): void {
  }

}
