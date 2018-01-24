import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnChanges{
  @Input() power_level: number;
  name = "SuperSaiyanThree";
  current_power: number;

  ngOnChanges(){
    this.current_power =  this.power_level ? 250 * this.power_level:0;
  }
}
