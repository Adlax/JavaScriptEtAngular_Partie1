module PersonneModule {

  export class Personne {
    _nom: string;
    _prenom: string;
    _age: number;
    _taille: number;
    _poids: number;
    constructor(nom:string, prenom:string, age:number, taille:number, poids:number){
      this._nom = nom;
      this._prenom = prenom;
      this._age = age;
      this._taille = taille;
      this._poids = poids;
    }
    get nom(){
      return this._nom;
    }
    get prenom(){
      return this._prenom;
    }
    get age(){
      return this._age;
    }
    get taille(){
      return this._taille;
    }
    get poids(){
      return this._poids;
    }
    set nom(n:string){
      this._nom = n;
    }
    set prenom(p:string){
      this._prenom = p;
    }
    set age(x:number){
      this._age = x;
    }
    set taille(y:number){
      this._taille = y;
    }
    set poids(z:number){
      this._poids = z;
    }
  }

  export class Etudiant extends Personne {
    _promotion: number;
    constructor(nom:string, prenom:string, age:number, taille:number, poids:number, promo:number){
      super(nom, prenom, age, taille, poids);
      this._promotion = promo;
    }
    set promotion(pr:number){
      this._promotion = pr;
    }
    get promotion(){
      return this._promotion;
    }
  }

  export class Enseignant extends Personne {
    _listeCours: Cours[];
    constructor(nom:string,prenom:string,age:number,taille:number,poids:number,liste:Cours[]){
      super(nom,prenom,age,taille,poids);
      this._listeCours = liste;
    }
    affichageCours(){
      this._listeCours.forEach( elt => console.log(elt._label) );
    }
    presentation(){
      console.log("Enseignant : " + this._prenom + " " + this._nom + " donne les cours suivant : ");
      this.affichageCours();
    }
  }

  export class Cours {
    _label: string;
    constructor(lab:string){
      this._label = lab;
    }
  }

}

let cours = [new PersonneModule.Cours("JavaScript"),new PersonneModule.Cours("HTML")];
let prof = new PersonneModule.Enseignant("Biloute","John",40,170,75,cours);

prof.presentation();
