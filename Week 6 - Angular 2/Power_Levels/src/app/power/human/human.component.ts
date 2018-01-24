import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnChanges {
  @Input() power_level: number;
  name = 'Human';
  current_power: number;

  ngOnChanges(){
    this.current_power =  this.power_level ? 1 * this.power_level:0;
  }
}
