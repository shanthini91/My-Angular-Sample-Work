import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {
public depositeForm:FormGroup; 
 acctid: string = "";
  amount: number = 0; 
  constructor(private fb: FormBuilder,private http: HttpClient, private route :Router) {
    this.depositeForm = this.fb.group({
      acctid: new FormControl(null,Validators.compose([Validators.required])),
	  amount: new FormControl(null,Validators.compose([Validators.required]))
    });
   }
onDeposite(){
	 console.log(this.depositeForm.value);
	 if(this.depositeForm.value!="")
	{
   this.http.put("http://localhost:8888/account/"+this.depositeForm.get('acctid').value+"/deposit/"+this.depositeForm.get('amount').value,"").subscribe(
    (response) => console.log(response))
	 //alert("Registered Successfully");
	}
	else{
		alert("Please enter all details!");
	}
	 //console.log("okk");
 }
  ngOnInit(): void {
  }

}
