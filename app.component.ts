import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router-sample';
 
 
  showAdminPage()
  {
    if( localStorage.getItem('admin') ){
      return true;
    }
    return false;
  }
  showCustomerPage()
  {
    if( localStorage.getItem('customer') ){
      return true;
    }
    return false;
  }
   
}
