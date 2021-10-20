/*
  7 : Mise en pratique
*/

<!--/home/rigel/Documents/JavaScriptEtAngular/Chapitre3-->
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>Exos</title>
  </head>
  <body>
    <script>
      let tab = ['a','b',6,'d',3,'b',99,'e',6,'e','c',15,'f',8,'b',6,'f',5,'b',338576,'f',057,'e'];
      // 1) Afficher le premier element du tableau
      document.writeln("Le premier element du tableau est : " + tab[0] + "<br/>");
      // 2) Ajouter deux elements
      document.writeln("L'addiction des elements 3 et 5 et afficher le resultat : " + (tab[2]+tab[4]) + "<br/>" );
      // 3) Recherche dans l'alphabet :
      let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      document.writeln("Le place dans l'alphabet du 8ieme element est : " + alphabet.indexOf(tab[7]) );
    </script>
  </body>
</html>
