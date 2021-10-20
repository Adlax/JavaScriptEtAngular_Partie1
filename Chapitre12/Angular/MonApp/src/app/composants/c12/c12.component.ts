import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-c12',
  templateUrl: './c12.component.html',
  styleUrls: ['./c12.component.css']
})
export class C12Component implements OnInit {

  citations: string[] = [];

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
  }

  affichageCitations() {
    this.citations = this.crud.getCitations();
  }

  deleteCitation(index: number) {
    this.citations = this.crud.deleteCitation(index);
  }

}
