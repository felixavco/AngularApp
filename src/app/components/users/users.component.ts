import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = false;
  enabledAdd: Boolean = true;
  // currentClasses = {};
  // currentSytles = {};

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
      this.users = [
        {
          firstName: "Felix",
          lastName: "Avelar",
          dob: 
          {
            m: 2,
            d: 5,
            y: 1989
          },
          address: 
          {
            street: '25  La Perla Ave',
            city: 'Tustin',
            state: 'CA'
          }, 
          // image: 'https://placeimg.com/600/600/nature/3',
          isActive: true,
          // balance: 1000,
          registered: new Date('01/02/2017 08:30:00')
        }, 
  
        {
          firstName: "Camila",
          lastName: "Avelar",
          dob: 
          {
            m: 3, 
            d: 18,
            y: 2013
          },
          address: 
          {
            street: '7 main Ave',
            city: 'Vancouver',
            state: 'BC'
          },
          // image: 'https://placeimg.com/600/600/nature/2',
          isActive: true,
          // balance: 500,
          registered: new Date('04/18/2013 15:30:00')
        }, 
  
        {
          firstName: "Brenda",
          lastName: "Marroquin",
          dob: 
          {
            m: 7, 
            d: 29,
            y: 1986
          },
          address: 
          {
            street: '15  Lomas St.',
            city: 'Boston',
            state: 'MA'
          },
          // image: 'https://placeimg.com/600/600/nature/1',
          isActive: false,
          // balance: 200,
          registered: new Date('01/05/2018 11:00:00')
        }
      ];

      this.loaded = true;
    // }, 1000);

  

    this.addUser({
      firstName: "Karla",
      lastName: "Rodriguez",
      // image: "https://placeimg.com/600/600/nature/8",
      isActive: false,
      // balance: 100,
      registered: new Date('02/05/2017 09:30:00')
    });

    // this.setCurrentClasses();
    // this.setCurrentStyles();
  }

  // function to create new users
  addUser(user: User) {
    this.users.push(user);
  }

  // setCurrentClasses(){
  //   this.currentClasses = {
  //     'btn-success':this.enabledAdd, // class will be added if "enabledAdd" is true
  //     'big-text':this.showExtended
  //   }
  // }

  // setCurrentStyles(){
  //   this.currentSytles = {
  //     'padding-top': this.showExtended ? '0' : '10%',
  //     'font-size' : this.showExtended ? '' : '40px'
  //   }
  // }

}
