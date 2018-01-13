import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  switches = [true, true, true, true, true, true, true, true, true, true, true];

  flipSwitch(idx){
    this.switches[idx] = !this.switches[idx];
  }
}
