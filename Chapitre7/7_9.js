var PersonneModule;
(function (PersonneModule) {
    class Personne {
        constructor(nom, prenom, age, taille, poids) {
            this._nom = nom;
            this._prenom = prenom;
            this._age = age;
            this._taille = taille;
            this._poids = poids;
        }
        get nom() {
            return this._nom;
        }
        get prenom() {
            return this._prenom;
        }
        get age() {
            return this._age;
        }
        get taille() {
            return this._taille;
        }
        get poids() {
            return this._poids;
        }
        set nom(n) {
            this._nom = n;
        }
        set prenom(p) {
            this._prenom = p;
        }
        set age(x) {
            this._age = x;
        }
        set taille(y) {
            this._taille = y;
        }
        set poids(z) {
            this._poids = z;
        }
    }
    PersonneModule.Personne = Personne;
    class Etudiant extends Personne {
        constructor(nom, prenom, age, taille, poids, promo) {
            super(nom, prenom, age, taille, poids);
            this._promotion = promo;
        }
        set promotion(pr) {
            this._promotion = pr;
        }
        get promotion() {
            return this._promotion;
        }
    }
    PersonneModule.Etudiant = Etudiant;
    class Enseignant extends Personne {
        constructor(nom, prenom, age, taille, poids, liste) {
            super(nom, prenom, age, taille, poids);
            this._listeCours = liste;
        }
        affichageCours() {
            this._listeCours.forEach(elt => console.log(elt._label));
        }
        presentation() {
            console.log("Enseignant : " + this._prenom + " " + this._nom + " donne les cours suivant : ");
            this.affichageCours();
        }
    }
    PersonneModule.Enseignant = Enseignant;
    class Cours {
        constructor(lab) {
            this._label = lab;
        }
    }
    PersonneModule.Cours = Cours;
})(PersonneModule || (PersonneModule = {}));
let cours = [new PersonneModule.Cours("JavaScript"), new PersonneModule.Cours("HTML")];
let prof = new PersonneModule.Enseignant("Biloute", "John", 40, 170, 75, cours);
prof.presentation();
