import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../../services/methods.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showForm:boolean = false;

  constructor(private methodsService: MethodsService) { }

  ngOnInit() {

    // this.methodsService.changeSF(this.changeShowForm());
    
  }

  changeShowForm(){
    let x = this.showForm = !this.showForm
    console.log(x);
    return x;
  }

  
}


