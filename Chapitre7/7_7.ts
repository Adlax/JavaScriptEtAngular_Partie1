/*
  Classe et Heritage
*/

class Vehicule {
  private _kilometrage: number;
  private _proprio: string;
  private _couleur: string;
  constructor(km:number, prop:string, coul:string){
    this._kilometrage = km;
    this._proprio = prop;
    this._couleur = coul;
  }
  get kilometrage(){
    return this._kilometrage;
  }
  get proprio(){
    return this._proprio;
  }
  get couleur(){
    return this._couleur;
  }
  set kilometrage(km:number){
    this._kilometrage = km;
  }
  set proprio(prop:string){
    this._proprio = prop;
  }
  set couleur(coul:string){
    this._couleur = coul;
  }
  avance(dist:number){
    this._kilometrage += dist;
  }
  recule(dist:number){
    this._kilometrage += dist;
  }
}

class Voiture extends Vehicule {

}

class Tracteur extends Vehicule {
  abaisse(cms:number){
    console.log("On baisse la rotative de " + cms );
  }
  monte(cms:number){
    console.log("On monte la rotative de " + cms );
  }
}

let caisse = new Voiture(180000,"Goldorak","Verte");
let tractos = new Tracteur(10000,"GoldoBoule","Jaune");

console.log(tractos.kilometrage);

tractos.avance(2);
console.log(tractos.kilometrage);

tractos.recule(3);
console.log(tractos.kilometrage);

tractos.monte(10);
tractos.abaisse(15);
