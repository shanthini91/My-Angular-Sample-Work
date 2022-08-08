import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewbalance',
  templateUrl: './viewbalance.component.html',
  styleUrls: ['./viewbalance.component.css']
})
export class ViewbalanceComponent implements OnInit {
acctid: string="";
  constructor(private http: HttpClient) {  }
onBalance()
{
	this.acctid=localStorage.getItem('acctid');
	console.log(this.acctid);
	this.http.get("http://localhost:8888/account_balance/"+this.acctid).subscribe(
    (response) => { 
	var resp=JSON.parse(JSON.stringify(response));
	document.getElementById("pid").innerHTML=resp;
	//for(var i=0;i<=resp.length;i++)
		 //this.rows.push( {acctid: resp[i].acctid, finalbal: resp[i].finalbal, initbal: resp[i].initbal, transacstatus: resp[i].transacstatus, transactype: resp[i].transactype} );
		
	//console.log("Account Id: "+resp[i].acctid+"\n"+"Customer Name: "+resp[i].custname+"\n"+"Phone: "+resp[i].phoneno+"\n"+"Occupation: "+resp[i].occupation+"\n"+"City: "+resp[i].city);

})
	
}
  ngOnInit(): void {
  }

}
