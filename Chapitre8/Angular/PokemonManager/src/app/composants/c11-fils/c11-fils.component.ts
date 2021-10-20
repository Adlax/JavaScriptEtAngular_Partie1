import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-c11-fils',
  templateUrl: './c11-fils.component.html',
  styleUrls: ['./c11-fils.component.css']
})
export class C11FilsComponent implements OnInit {

  // @Input() parametre = "Luke"; //par defaut, si vide.
  @Output() unEvenement = new EventEmitter();

  emitObject = {
    message: "DG-Mon Vieux",
  }

  constructor() { }

  ngOnInit(): void {
  }

  surClick() {
    this.unEvenement.emit(emitObject);
  }

}
