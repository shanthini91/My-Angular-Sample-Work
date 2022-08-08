import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControlName,  ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-deletelogs',
  templateUrl: './deletelogs.component.html',
  styleUrls: ['./deletelogs.component.css']
})
export class DeletelogsComponent implements OnInit {
public delLogsForm:FormGroup; // variable is created of type FormGroup is created
  acctid: string = ""; 
  constructor(private fb: FormBuilder, private http: HttpClient) 
  {
		this.delLogsForm = this.fb.group({
      acctid: new FormControl(null,Validators.compose([Validators.required]))
    });
  }
onLogsDelete(){
	 console.log(this.delLogsForm.value);
	 if(this.delLogsForm.value!="")
	{
   this.http.delete("http://localhost:8888/accountlog_delete/"+this.delLogsForm.get('acctid').value).subscribe(
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
