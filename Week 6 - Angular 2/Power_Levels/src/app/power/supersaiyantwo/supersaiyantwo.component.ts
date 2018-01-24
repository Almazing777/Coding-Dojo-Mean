import { Component, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnChanges{
  @Input() power_level: number;
  name = "SuperSaiyanTwo";
  current_power: number;

  ngOnChanges(){
    this.current_power =  this.power_level ? 150 * this.power_level:0;
  }
}
