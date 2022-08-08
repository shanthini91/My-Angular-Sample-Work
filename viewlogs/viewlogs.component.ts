import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewlogs',
  templateUrl: './viewlogs.component.html',
  styleUrls: ['./viewlogs.component.css']
})
export class ViewlogsComponent implements OnInit {
acctid : string ="";
finalbal : string ="";
initbal : string ="";
transacstatus : string ="";
transactype : string ="";
public rows: Array<{acctid: string, finalbal: string, initbal: string, transacstatus: string, transactype: string}> = [];
  constructor(private http: HttpClient) {
	  
  }
onList()
{
	
	
	var myContainer = document.getElementById('list') as HTMLInputElement;
	this.http.get('http://localhost:8888/account_logs').subscribe(
    (response) => { 
	var resp=JSON.parse(JSON.stringify(response));
	for(var i=0;i<=resp.length;i++)
		 this.rows.push( {acctid: resp[i].acctid, finalbal: resp[i].finalbal, initbal: resp[i].initbal, transacstatus: resp[i].transacstatus, transactype: resp[i].transactype} );
		
	//console.log("Account Id: "+resp[i].acctid+"\n"+"Customer Name: "+resp[i].custname+"\n"+"Phone: "+resp[i].phoneno+"\n"+"Occupation: "+resp[i].occupation+"\n"+"City: "+resp[i].city);

})
	

}
  ngOnInit(): void {
  }

}
