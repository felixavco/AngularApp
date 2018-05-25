import { Component, OnInit} from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})

export class UserComponent implements OnInit{
  // Properties
  user: User;
 
  // Methods
  constructor(){}

  ngOnInit(){
    this.user = {
      firstName: "Felix",
      lastName: "Avelar",
      dob: 
      {
        m: 2, /*March*/
        d: 5,
        y: 1989
      },
      address: 
      {
        street: '25  La Perla Ave',
        city: 'Tustin',
        state: 'CA'
      }
    }
  }

  //Returns the actual year based on the 
  getAge(D, M, Y):number{

    let d = new Date();
    let m = d.getMonth();
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

  
    if(m >= M){
      if(dt >= D){
        let age = y - Y;
        return age;
      } else{
        let age = (y - Y) - 1;
        return age;
      }
    }
    else {
      let age = (y - Y) - 1;
      return age;
    }
  }

}

