import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { MethodsService } from '../../services/methods.service';

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
    dob: "" 
  };
  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = false;
  enabledAdd: Boolean = false;
  hide?: true;
  showUserForm:Boolean = false;
  @ViewChild('userForm') form: any;
  data:any;

  constructor(private userService: UserService, private methodsService: MethodsService) { }

  ngOnInit() {

      // this.showUserForm = this.methodsService.changeSF();

      this.userService.getData().subscribe(data => {
        console.log(data);
      });
      
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      });  
  }

  // function to create new users
   getAge(date):number{

    let fullDate = new Date(date);
    let D = fullDate.getDate();
    let M = fullDate.getMonth();
    let Y = fullDate.getFullYear();

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

  onSubmit({value, valid}:{value: User, valid:boolean}){
    if(!valid)
    {
      console.log("Form is not Valid");
    }
    else
    {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      // this.users.unshift(value);
      this.userService.addUser(value);
      this.form.reset();
      this.showUserForm = false;
    }

    
  }

   

}
