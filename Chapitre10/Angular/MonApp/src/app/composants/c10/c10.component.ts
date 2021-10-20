import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css']
})
export class C10Component implements OnInit {

  replique = "Tu vois, le monde se divise en deux catégories : ceux qui ont un pistolet chargé et ceux qui creusent. Toi, tu creuses.";

  unChiffre = 3.1415897745512215541;

  teslaM3 = 48600;

  today = Date.now();

  monObj = {2: 'espace' , 1: 'esprit', 6: 'ame', 4: 'realite', 3: 'temps', 5: 'pouvoir'};
  monDico = new Map([ [2, 'espace'], [1, 'esprit'], [6, 'ame'], [4, 'realite'], [3, 'temps'], [5, 'pouvoir'] ]);

  uneChaine = "Cette chaine de caractere est beaucoup beaucoup trop longue.";
  unTableau = ['La Cene', 'Mona Lisa', 'La Jeune Fille Et La Perle', 'La Ronde De Nuit'];

  unJson = {
    Azorius : {c1: 'bleu', c2: 'vert'},
    Dimir : {c1: 'jaune', c2: 'orange'},
    Rakdos : {c1: 'bleu', c2: 'marron'},
    Gruul : {c1: 'rouge', c2: 'violet'},
    Selesnya : {c1: 'jaune', c2: 'cyan'},
    Izzet : {c1: 'verdatre', c2: 'jaunepisse'},
    Simic : {c1: 'yellow', c2: 'submarine'},
  };

  unePromesse = new Promise( (resolve) => {
    setTimeout( ()=>resolve("C'est bon zarma, apres 5 secs") , 5000 );
  });

  constructor() { }

  ngOnInit(): void {
  }

}
