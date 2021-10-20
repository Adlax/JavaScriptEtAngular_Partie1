/*
  cHAP 4
*/

// 4.2 : Conditions
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>CHAPITRE4</title>
  </head>
  <body>
    <script type="text/jacascript">
    document.writeln("<h3>Operateurs logiques : </h3>");
    document.writeln("<span>ET</span>");
    document.writeln(true && true);
    document.writeln(true && false);
    document.writeln(false && true);
    document.writeln(false && false);
    document.writeln("<br/>");
    document.writeln("<span>OU</span>");
    document.writeln(true || true);
    document.writeln(true || false);
    document.writeln(false || true);
    document.writeln(false || false);
    document.writeln("<br/>");
    document.writeln("<span>NON</span>");
    console.log(!true);
    console.log(!false);
    console.log(!"");
    console.log(!null);
    console.log(!0);
    console.log(!undefined);
    document.writeln("<br/>");
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>CHAPITRE4</title>
  </head>
  <body>
    <script type="text/jacascript">
    let jourNumeric = new Date().getDay();
    let jourLiteral;
    switch(jourNumeric){
      case 0:
        jourLiteral = "dimanche";
        break;
      case 1:
          jourLiteral = "lundi";
          break;
      case 0:
          jourLiteral = "mardi";
          break;
      case 0:
          jourLiteral = "mercredi";
          break;
      case 0:
          jourLiteral = "jeudi";
          break;
      case 0:
          jourLiteral = "vendredi";
          break;
      case 0:
          jourLiteral = "samedi";
          break;
    }
    document.writeln("Aujourd;hui nous sommes le : " + jourLiteral);
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>CHAPITRE4</title>
  </head>
  <body>
    <script type="text/jacascript">
    let lancement = 5;
    while(lancement >= 0){
      document.writeln("Decompte : " + lancement + "<br/>");
      lancement--;
    }
    document.writeln("Lancement reussi!");
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>CHAPITRE4</title>
  </head>
  <body>
    <script type="text/jacascript">
    let lancement = 5;
    while(lancement >= 0){
      document.writeln("Decompte : " + lancement + "<br/>");
      lancement--;
    }
    document.writeln("Lancement reussi!");
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>CHAPITRE4</title>
  </head>
  <body>
    <script type="text/jacascript">
    let choix;
    do{
      console.log("Formules : ");
      console.log("n1-entree/plat/dessert");
      console.log("n2-plat/dessert");
      console.log("n3-entree/plat");
      choix = prompt("Votre choix : ");
    }while(choix != 0);
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>CHAPITRE4</title>
  </head>
  <body>
    <script type="text/javascript">
    let affichage;
    for(let i = 1; i <= 25; i++){
      affichage = "";
      if(i % 3 == 0){
        affichage += "Fizz";
      }
      if(i % 5 == 0){
        affichage += "Buzz";
      }
      if(affichage == ""){
        affichage += i;
      }
      console.log(affichage);
    }
    </script>
  </body>
</html>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>CHAPITRE4</title>
  </head>
  <body>
    <script type="text/javascript">
    let liste = {
      "jackSparrow" : "Johnny Depp",
      "lizSwan" : "conasse",
      "willTurner" : "legolas"
    };
    for(let key in liste){
      console.log(key);
    }
    </script>
  </body>
</html>
