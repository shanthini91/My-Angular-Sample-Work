import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
public delAcctForm:FormGroup; // variable is created of type FormGroup is created
  acctid: string = ""; 
  constructor(private fb: FormBuilder, private http: HttpClient) 
  {
	 this.delAcctForm = this.fb.group({
      acctid: new FormControl(null,Validators.compose([Validators.required]))
    });
	}
onAcctDelete(){
	 console.log(this.delAcctForm.value);
	 if(this.delAcctForm.value!="")
	{
   this.http.delete("http://localhost:8888/account_delete/"+this.delAcctForm.get('acctid').value).subscribe(
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
