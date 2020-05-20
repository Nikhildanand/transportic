import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  buttonClick() {
    /* Function to check the functionality of button click in parent class 
       Do not use this function while pushing to git repo
    */
    alert('Button Clicked');
  }
}
