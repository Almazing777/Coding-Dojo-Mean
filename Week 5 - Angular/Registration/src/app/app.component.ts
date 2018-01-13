import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    email: " ",
    firstName: " ",
    lastName: " ",
    password: " ",
    password_confirm: " ",
    address: " ",
    apt: " ",
    city: " ",
    state: " ",
    radio1: " ",
    radio2: " "
  };

  onSubmit(){
    console.log("onSubmit()");
    console.log(this.user);

    this.user = {
      email: " ",
      firstName: " ",
      lastName: " ",
      password: " ",
      password_confirm: " ",
      address: " ",
      apt: " ",
      city: " ",
      state: " ",
      radio1: " ",
      radio2: " "
    };
  }
}

