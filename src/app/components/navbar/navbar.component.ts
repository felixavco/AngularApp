import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showForm:Boolean = this.changeShowForm();

  constructor() { }

  ngOnInit() {
    
  }

  changeShowForm():Boolean{
    let x = this.showForm = !this.showForm;
    console.log(x);
    return x;
  }

}
