import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  data:Observable<any>;

  constructor() { 

    this.users = [
      {
        firstName: "Felix",
        lastName: "Avelar",
        email: "felixavco@gmail.com",
        dob: "1989-03-05",
        isActive: true,
        registered: new Date('01/02/2017 08:30:00'), 
        hide:true
      }, 

      {
        firstName: "Camila",
        lastName: "Avelar",
        email: "cavelar@gmail.com",
        dob: "2013-04-18",
        isActive: true,
        registered: new Date('04/18/2013 15:30:00'),
        hide:true
      }, 

      {
        firstName: "Brenda",
        lastName: "Marroquin",
        email: "bmarroquin@gmail.com",
        dob: "1986-08-29",
        isActive: true,
        registered: new Date('01/05/2018 11:00:00'),
        hide:true
      }
    ];
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}
