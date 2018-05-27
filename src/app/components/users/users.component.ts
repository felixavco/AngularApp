import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User= {
    firstName: "",
    lastName: "",
    email: "",
    dob: {
      m: null,
      d: null, 
      y: null
    }, 
  };
  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = false;
  enabledAdd: Boolean = false;
  hide?: true;
  showUserForm:Boolean = false;
  date:string;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: "Felix",
          lastName: "Avelar",
          email: "felixavco@gmail.com",
          dob: 
          {
            m: 2,
            d: 5,
            y: 1989
          }, 
          isActive: true,
          registered: new Date('01/02/2017 08:30:00'), 
          hide:true
        }, 
  
        {
          firstName: "Camila",
          lastName: "Avelar",
          email: "cavelar@gmail.com",
          dob: 
          {
            m: 3, 
            d: 18,
            y: 2013
          },
          isActive: true,
          registered: new Date('04/18/2013 15:30:00'),
          hide:true
        }, 
  
        {
          firstName: "Brenda",
          lastName: "Marroquin",
          email: "bmarroquin@gmail.com",
          dob: 
          {
            m: 7, 
            d: 29,
            y: 1986
          },
          isActive: true,
          registered: new Date('01/05/2018 11:00:00'),
          hide:true
        }
      ];

      this.loaded = true;
  }

  // function to create new users
  addUser() {
    this.fillDOB();
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: "",
      lastName: "",
      email: "",
      dob: {
        m: null,
        d: null, 
        y: null
      }
    };

    this.showUserForm = false;
  }

  fillDOB(){
    let fullDate = new Date(this.date);
    let d = fullDate.getDate();
    let m = fullDate.getMonth();
    let y = fullDate.getFullYear();
    this.user.dob.d = d + 1;
    this.user.dob.m = m;
    this.user.dob.y = y;

   }

   getAge(D, M, Y):number{

    let d = new Date();
    let m = d.getMonth();
    let dt = d.getDate();
    let y = d.getFullYear();

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
