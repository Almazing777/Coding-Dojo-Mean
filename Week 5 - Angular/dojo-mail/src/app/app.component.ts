import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Dojo Mail !"
  emails = [
    {email: "bill@gates.com", important: true, subject: "New Windows", content: "Windows XI Launch" },
    {email: "ada@lovelace.com", important: true, subject: "Programming", content: "Enchantress of Numbers" },
    {email: "john@carmac..com", important: false, subject: "Updated Algo", content: "New Algorithm for shadow volume" },
    {email: "gabe@newel.com", important: false, subject: "HL3!", content: "Just Kidding.." },
  ]

}
