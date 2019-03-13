var listeCarte=['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','17.png','18.png','19.png','20.png','21.png','22.png','23.png','24.png','25.png','26.png','27.png','28.png','29.png','30.png','31.png','32.png','33.png','34.png','35.png','36.png','37.png','38.png','39.png','40.png','41.png','42.png','43.png','44.png','45.png','46.png','47.png','48.png','49.png','50.png','51.png','52.png'];
var nbplayers;
var liste_joueur = [];
var liste_gorge_joueur = [];
var liste_pari_joueur = [];

function saisie(){
    var nbplayers = window.prompt("Nombre de Joueur :", "4");
    console.log(nbplayers);
    NbJoueur(nbplayers);
}

function NbJoueur(nb){
    for (var i = 0; i < nb ; i++) {
      var nom = window.prompt("Nom du Joueur n°"+(i+1)+":", "Robert");
      liste_joueur[i]=nom;
    }

    for (var j = 0; j < liste_joueur.length; j++) {
     $("#joueur").append($("<h4>",{"id":"joueur"+j}).text(liste_joueur[j]));
    }
    NbGorge();
}


function NbGorge(){

  for (var e = 0; e < liste_joueur.length; e++) {
    var num = window.prompt("Nombre de Gorgée pour "+liste_joueur[e], "3");
    liste_gorge_joueur[e]=num;
  }

  for (var t = 0; t < liste_gorge_joueur.length; t++) {
    $("#joueur"+t).append($("<span>",{"style":"float:right;"}).text("Pari "+liste_gorge_joueur[t]+" gorgée(s) "));
  }

  CouleurPari();
}

function CouleurPari(){

  for (var r = 0; r < liste_joueur.length; r++) {
    var pari = window.prompt("Joueur n°"+(r+1)+" Choissisez votre paris entre carreau,coeur,trèfle ou pique");
    liste_pari_joueur[r]=pari;
  }

  for (var y = 0; y < liste_gorge_joueur.length; y++) {
    $("#joueur"+y).prepend($("<span>",{"style":"float:right;"}).text("sur "+liste_pari_joueur[y]));
    document.querySelector("#lancer").style.display = "None";
    document.querySelector("#jeu").style.visibility = "visible";
  }





}
