import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User= {
    firstName: "",
    lastName: "",
    dob: {
      m: null,
      d: null, 
      y: null
    }, 
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = false;
  enabledAdd: Boolean = false;
  hide?: true;
  showUserForm:Boolean = new NavbarComponent().changeShowForm();
  date:String;

  constructor() { }

  ngOnInit() {
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
          registered: new Date('01/02/2017 08:30:00'), 
          hide:true
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
          registered: new Date('04/18/2013 15:30:00'),
          hide:true
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
          isActive: true,
          // balance: 200,
          registered: new Date('01/05/2018 11:00:00'),
          hide:true
        }
      ];

      this.loaded = true;

  

    this.addUser({
      firstName: "Karla",
      lastName: "Rodriguez",
      // image: "https://placeimg.com/600/600/nature/8",
      isActive: true,
      // balance: 100,
      registered: new Date('02/05/2017 09:30:00'),
      hide:true
    });

  
  }

  // function to create new users
  addUser(user: User) {
    this.users.push(user);
  }

}
