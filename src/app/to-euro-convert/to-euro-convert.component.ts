import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent {
  
  @Input() Montant! : number;
  @Output() sender = new  EventEmitter();

  constructor() { }

  test(){
 this.sender.emit(this.Montant * 0.3);
}
  ngOnInit(): void {
 
  }
}
