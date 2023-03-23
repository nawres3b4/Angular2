import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../Model/Actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() actor! :Actor;
  @Output() sender = new  EventEmitter();
  constructor() { }

  getActor(actor : Actor){
    this.sender.emit(actor);
  }
  ngOnInit(): void {
  }
}
