var listeCarte=[2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52];
var nbplayers;
var liste_joueur = [];
var liste_gorge_joueur = [];
var liste_pari_joueur = [];

function setup() {
  shuffle(listeCarte, true); // force modifications to passed array
  print(listeCarte);
}

function saisie(){
    var nbplayers = window.prompt("Nombre de Joueur :", "4");
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

var h = 1;
var pique=1;
var carreau=1;
var coeur=1;
var trefle=1;
function Tour(){
  h = h+1;
  $("#melange").attr("src", "image/carte/"+listeCarte[h]+".png");

  if (listeCarte[h] > 1 && listeCarte[h] < 14) {
    pique=pique+1;
    document.querySelector("#pique"+pique).style.visibility = "visible";
    document.querySelector("#pique"+(pique-1)).style.visibility = "hidden";
    if(pique == 7){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }
  }
  if (listeCarte[h] > 14 && listeCarte[h] < 27) {
    coeur=coeur+1;
    document.querySelector("#coeur"+coeur).style.visibility = "visible";
    document.querySelector("#coeur"+(coeur-1)).style.visibility = "hidden";
    if(coeur == 7){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }
  }
  if (listeCarte[h] > 27 && listeCarte[h] < 40) {
    carreau=carreau+1;
    document.querySelector("#carreau"+carreau).style.visibility = "visible";
    document.querySelector("#carreau"+(carreau-1)).style.visibility = "hidden";
    if(carreau == 7){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }
  }
  if (listeCarte[h] > 40 && listeCarte[h] < 53) {
    trefle=trefle+1;
    document.querySelector("#trefle"+trefle).style.visibility = "visible";
    document.querySelector("#trefle"+(trefle-1)).style.visibility = "hidden";
    if(trefle == 7){
      document.querySelector("#tirage2").style.visibility = "hidden";
    }
  }


}
