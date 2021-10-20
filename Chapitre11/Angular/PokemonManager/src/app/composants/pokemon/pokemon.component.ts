import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon = {};
  @Output() evnt = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  surClick(nom) {
    this.evnt.emit(nom);
  }

}
