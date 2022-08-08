import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})
export class AccountinfoComponent implements OnInit {
public viewAcctForm:FormGroup; // variable is created of type FormGroup is created
  acctID: string = ""; 
  acctid : string ="";
acctstatus : string ="";
balance : string ="";
  public rows: Array<{acctid: string, acctstatus: string, balance: string}> = [];
  constructor(private fb: FormBuilder, private http: HttpClient) 
  {
	  this.viewAcctForm = this.fb.group({
      acctID: new FormControl(null,Validators.compose([Validators.required]))
    });
  }
onAcctInfo(){
	 console.log(this.viewAcctForm.value);
	 if(this.viewAcctForm.value!="")
	{
    this.http.get("http://localhost:8888/account_info/"+this.viewAcctForm.get('acctID').value).subscribe(
    (response) => {console.log(response);
	var resp=JSON.parse(JSON.stringify(response));
	//console.log(resp.acctid);
	this.acctid=resp.acctid;
	this.acctstatus=resp.acctstatus;
	this.balance=resp.balance;

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
