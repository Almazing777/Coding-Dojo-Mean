import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnChanges{
  @Input() power_level: number;
  name = "Saiyan";
  current_power: number;

  ngOnChanges(){
    this.current_power =  this.power_level ? 10 * this.power_level:0;
  }
}
