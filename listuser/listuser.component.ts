import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
acctid : string ="";
custname : string ="";
phoneno : string ="";
occupation : string ="";
city : string ="";
public rows: Array<{acctid: string, custname: string, phoneno: string, occupation: string, city: string}> = [];
  constructor(private http: HttpClient) {
	  
  }
onList()
{
	
	//var table = document.getElementById("myTable");
	var myContainer = document.getElementById('list') as HTMLInputElement;
	this.http.get('http://localhost:8888/listall_customer').subscribe(
    (response) => { 
	var resp=JSON.parse(JSON.stringify(response));
	for(var i=0;i<=resp.length;i++)
		 this.rows.push( {acctid: resp[i].acctid, custname: resp[i].custname, phoneno: resp[i].phoneno, occupation: resp[i].occupation, city: resp[i].city} );
		//var res=resp[i];
	//console.log(resp[i].acctid);
	//console.log(res.acctid);
	console.log("Account Id: "+resp[i].acctid+"\n"+"Customer Name: "+resp[i].custname+"\n"+"Phone: "+resp[i].phoneno+"\n"+"Occupation: "+resp[i].occupation+"\n"+"City: "+resp[i].city);

	// this.acctid = resp[i].acctid;
  //this.custname = resp[i].custname;
  //this.phoneno = resp[i].phoneno;
  //this.occupation = resp[i].occupation;
//this.city = resp[i].city;

//console.log("checking "+this.acctid);
//this.responseData = "Account Id: "+resp[i].acctid+"\n"+"Customer Name: "+resp[i].custname+"\n"+"Phone: "+resp[i].phoneno+"\n"+"Occupation: "+resp[i].occupation+"\n"+"City: "+resp[i].city;
	/*var row = table.insertRow(-1);
  row.insertCell(0).innerHTML = resp[i].acctid;
  row.insertCell(1).innerHTML = resp[i].custname;
  row.insertCell(2).innerHTML = resp[i].phone;
  row.insertCell(3).innerHTML = resp[i].occupation;
row.insertCell(4).innerHTML = resp[i].city;*/
})
	
	/**/
}
  ngOnInit(): void {
  }

}
