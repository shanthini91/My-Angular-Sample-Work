import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
public withdrawForm:FormGroup; 
 acctid: string = "";
  amount: number = 0;  
  constructor(private fb: FormBuilder,private http: HttpClient, private route :Router) {
    this.withdrawForm = this.fb.group({
      acctid: new FormControl(null,Validators.compose([Validators.required])),
	  amount: new FormControl(null,Validators.compose([Validators.required]))
    });
   }
onWithdraw(){
	 console.log(this.withdrawForm.value);
	 if(this.withdrawForm.value!="")
	{
   this.http.put("http://localhost:8888/account/"+this.withdrawForm.get('acctid').value+"/withdraw/"+this.withdrawForm.get('amount').value,"").subscribe(
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
