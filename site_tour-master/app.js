/*----------------RESERVOIR ------------------*/
function showReserv(){
    document.getElementById("textReservoir").style.visibility = "visible";
}

function hideReserv(){
    document.getElementById("textReservoir").style.visibility = "hidden";
}
document.getElementById("Réservoir").addEventListener("mouseover",showReserv);
document.getElementById("Réservoir").addEventListener("mouseleave",hideReserv);
/*------------------ CABINE --------------*/
function showCabine(){
    document.getElementById("textCabine").style.visibility = "visible";
}

function hideCabine(){
    document.getElementById("textCabine").style.visibility = "hidden";
}
document.getElementById("Cabine").addEventListener("mouseover",showCabine);
document.getElementById("Cabine").addEventListener("mouseleave",hideCabine);
/*------------------ REACTEUR-----------------*/
function showReacteur(){
    document.getElementById("textReacteur").style.visibility = "visible";
}

function hideReacteur(){
    document.getElementById("textReacteur").style.visibility = "hidden";
}
document.getElementById("RéacteurLancement").addEventListener("mouseover",showReacteur);
document.getElementById("RéacteurLancement").addEventListener("mouseleave",hideReacteur);
/*----------------- REACTEUR FUSEE ---------------------*/
function showReacteurFusee(){
    document.getElementById("textReacteurFusee").style.visibility = "visible";
}

function hideReacteurFusee(){
    document.getElementById("textReacteurFusee").style.visibility = "hidden";
}
document.getElementById("RéeacteurFusée").addEventListener("mouseover",showReacteurFusee);
document.getElementById("RéeacteurFusée").addEventListener("mouseleave",hideReacteurFusee);

