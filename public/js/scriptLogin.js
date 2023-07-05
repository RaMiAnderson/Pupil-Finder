// Bouton inscription et connexion sur Block Formulaire
let
    ligne_log = document.getElementById('ligne');
    conn = document.getElementById('conn');
    insc = document.getElementById('insc');
    box_conn = document.getElementById('box-conn');
    box_insc1 = document.getElementById('box-insc-1');
    box_insc2 = document.getElementById("box-insc-2");
//   element Titre otran headrer iny
     box_bienv = document.getElementById('box-bienv');
     box_merc = document.getElementById('box-merc');
function connexion(){
    ligne_log.style.transform = "translateX(0)";
    conn.style.color = "white";
    insc.style.color = "rgb(207, 207, 207)" ;
    box_conn.style.transform = "translateX(0)";
    box_insc1.style.transform = "translateX(0)";
    box_insc2.style.transform = "translateX(0)";
    box_bienv.style.transform = "translateX(0)";
        box_merc.style.transform = "translate(0)";
};
function inscription(){
    ligne_log.style.transform = "translateX(124%)";
    conn.style.color = "rgb(207, 207, 207)";
    insc.style.color = "white";
    if (( box_conn.style.transform == "translateX(-200%)" ) == true ){
        box_conn.style.transform = "translateX(-200%)";
        box_insc1.style.transform = "translateX(-200%)";
        box_insc2.style.transform = "translateX(-200%)";
    }else{
        box_conn.style.transform = "translateX(-100%)";
        box_insc1.style.transform = "translateX(-100%)";
        box_insc2.style.transform = "translateX(-100%)";
        box_bienv.style.transform = "translateX(-200%)";
        box_merc.style.transform = "translate(-200%)";  
    };
};

function prevInsc(){
    box_conn.style.transform = "translateX(-100%)";
    box_insc1.style.transform = "translateX(-100%)";
    box_insc2.style.transform = "translateX(-100%)";
};
function nxtInsc(){
    box_conn.style.transform = "translateX(-200%)";    
    box_insc1.style.transform = "translateX(-200%)";
    box_insc2.style.transform = "translateX(-200%)";
}


    
    