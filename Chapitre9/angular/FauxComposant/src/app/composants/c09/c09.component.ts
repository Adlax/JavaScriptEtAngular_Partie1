import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c09',
  templateUrl: './c09.component.html',
  styleUrls: ['./c09.component.css']
})
export class C09Component implements OnInit {

  maVar = "Une var perso a afficher";
  monNombre = 8008;
  monObjet = {
    nom: "Wayne",
    prenom: "Bruce",
    ville: "GothamCity"
  };
  nbClick = 0;
  texteButton = "Non clique";
  sportifs = ["Jlo","Ayrton Senna","Johny Beegud","Alfred Donzos"];
  maClasse= "alert-primary";
  monBool = true;
  monObjetDeClasse = {
    'badge': true,
    'badge-pill': true,
    'badge-primary': true
  };
  unStyle = 'red';
  monStyle = {
    "color": 'red',
    'font-weight': 'bold'  
  };

  constructor() { }

  ngOnInit(): void {
  }

  surClick(): void {
    this.nbClick++;
    this.texteButton = "Nombre de click sur bouton : " + this.nbClick;
  }

  onClickToggleClass(): void {
    if(this.maClasse == "alert-success"){
      this.maClasse = "alert-danger";
    } else {
      this.maClasse = "alert-success";
    }
  }

  onClickChangeClass(): void {
    this.monBool = !this.monBool;
  }

  uneFonction() {
    return "white";
  }
}
