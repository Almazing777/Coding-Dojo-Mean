import { Component,  Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnChanges{
  @Input() power_level: number;
  name = "SuperSaiyanFour";
  current_power: number;

  ngOnChanges(){
    this.current_power =  this.power_level ? 500 * this.power_level:0;
  }
}
