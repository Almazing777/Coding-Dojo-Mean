import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnChanges{
  @Input() power_level: number;
  name = "SuperSaiyan";
  current_power: number;

  ngOnChanges(){
    this.current_power =  this.power_level ? 90 * this.power_level:0;
  }
}
