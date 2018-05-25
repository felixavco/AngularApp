import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})

export class UserComponent {
  // Properties
  user:object = {
    firstName: "Felix",
    lastName: "Avelar",
    dob: 
    {
      m: "March",
      d: 5,
      y: 1989
    },
    address: 
    {
      street: '14 La Perla Ave',
      city: 'Tustin',
      state: 'CA'
    }
  }

  // Methods
  constructor(){

  }

  getAge(D, M, Y){

    let d = new Date();
    let m = d.getMonth;
    let dt = d.getDate();
    let y = d.getFullYear();
    let months = [
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
    ];

    // if()

  }

}