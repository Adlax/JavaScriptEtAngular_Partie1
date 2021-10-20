import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  citations:string[] = [
    "Jaime quand un plan se deroule sans accroc!",
    "Le coup le plus rusé que le diable ait jamais réussi, c’est de faire croire à tout le monde qu’il n’existait pas.",
    "J’ai les mains faites pour l’or, et elles sont dans la merde !",
    "J’adore l’odeur du napalm au petit matin."
  ];

  constructor() { }

  getCitations() {
    return this.citations;
  }

  deleteCitation(index:number){
    this.citations.splice(index,1);
    return this.citations;
  }

}
