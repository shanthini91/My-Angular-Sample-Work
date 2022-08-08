import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
//html: string = 'Plain Text Example &amp; <strong>Bold Text Example</strong>';
 //variable: string;
  constructor() {
	 
    //this.variable = localStorage.getItem("id");
  }
  ngOnInit(): void {
  }

}
