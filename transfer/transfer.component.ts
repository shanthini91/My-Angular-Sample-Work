import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient ,HttpParams, HttpHeaders} from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
public transferForm:FormGroup; 
  /*acctID: string = "";
  destAcctID: string = "";
  amount: number = 0;   */
  constructor(private fb: FormBuilder,private http: HttpClient, private route :Router) {
    this.transferForm = this.fb.group({
	  acctID: new FormControl(null,Validators.compose([Validators.required])),
      destAcctID: new FormControl(null,Validators.compose([Validators.required])),
	  amount: new FormControl(null,Validators.compose([Validators.required]))
    });
   }
onTransfer(){
	 console.log(this.transferForm.value);
	 if(this.transferForm.value!="")
	{
	console.log(this.transferForm.get('acctID').value);	
	console.log(this.transferForm.get('destAcctID').value);	
	console.log(this.transferForm.get('amount').value);
	//console.log(JSON.stringify(this.transferForm.value) );
	
	var headers = new HttpHeaders({
 
    "Accept": "application/json"
});

var params = new HttpParams()
    .set('amount', this.transferForm.get('amount').value)
    .append('destAcctID', this.transferForm.get('destAcctID').value)
    .set('acctID', this.transferForm.get('acctID').value);
 
console.log(params.get('page')); 

   this.http.put("http://localhost:8888/account_transfer", params ,{headers : headers  } ).subscribe(
    //this.http.put("http://localhost:8888/78980842/account/789583421/transfer/100000","").subscribe(
	(response) =>{ console.log(response +JSON.stringify(this.transferForm.value))},
	(error) =>{
		console.log(error);
	},
	() =>{
		console.log("finish");
	})
	 //alert("Registered Successfully");
	}
	else{
		alert("Please enter all details!");
	}
	
	 
 }
  ngOnInit(): void {
  }

}
