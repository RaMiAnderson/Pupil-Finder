// Burger 
let toggle = document.querySelector(".toggle");
var body = document.querySelector('body');
toggle.addEventListener('click' , ()=>{
  body.classList.toggle('active_toggle');
});
//TOPBARMAX
var tpbarrMax = document.querySelector('.topbarMax');
// Interaction des pages Horrizontale
var btnVert = document.querySelectorAll('.navigation-Vertical ul li button');
var btnHoriz = document.querySelectorAll('.btnNavH');
    btnHoriz.forEach(function(BtnNavH){
      
      BtnNavH.addEventListener("click" , function(){
        // Initialisation
        for(var i = 0; i < btnHoriz.length; i++){
          btnHoriz[i].style.background = "transparent";
          btnHoriz[i].style.color = "var(--blackbe)";
        }
        btnVert.forEach((initialisationVert)=>{
          initialisationVert.style.background = "transparent";
          initialisationVert.style.color = "var(--white)";
        });


        // Corp Traitement
        var btnCorrespondant = document.getElementById(this.id);
        btnCorrespondant.style.background = "var(--violet)";
        btnCorrespondant.style.color = "var(--white)";

        PgAnnonce.style.display = "none";
        PGcalender.style.display = "none";
        PgEDT.style.display = "none";
        PgProfil.style.display = "none";
        PPggAbsence.style.display =" none";
        switch (this.id){
          case "versHome" : 
                tpbarrMax.style.width = "100%";
                homePageGG.style.display = "flex";
                 Apayer.style.display = "none";
                 navVertical.style.display = "none";
                 navVertical.classList.remove('active_toggle');
                 toggle.style.display = "none";
                 PgNote.style.display = "none";
                 PgNotif.style.display = "none";
                 window.scrollTo(0,0);
                 break;
          case "Notiff" : 
                PgNotif.style.display = "block";
                navVertical.style.display = "block";
                 Apayer.style.display = "none";
                 homePageGG.style.display = "none";
                 PgNote.style.display = "none";
                 toggle.style.display = "flex";
                 window.scrollTo(0,0);
                 break;
        }
      });
    });
// Interaction des boutton Vertical
    btnVert.forEach(function(BtnNavV){
      BtnNavV.addEventListener("click" , function(){
        window.scrollTo(0,0);
        for(var i = 0; i < btnVert.length; i++){
          btnVert[i].style.background = "transparent";
          btnVert[i].style.color = "var(--white)";
        }
        btnHoriz.forEach((initialisationHoriz)=>{
          initialisationHoriz.style.background = "transparent";
          initialisationHoriz.style.color = "var(--blackbe)";
        });
        var btnVCorrespondant = document.getElementById(this.id);
        btnVCorrespondant.style.background = "var(--white)";
        btnVCorrespondant.style.color = "var(--violet)";
        //declaration page
        var Apayer = document.getElementById('Apayer');
        // Interaction des page affiché
        PgNotif.style.display = "none";
        switch (this.id){
          case "Profil" : 
                PgProfil.style.display = "grid";
                 Apayer.style.display = "none";
                 PgNote.style.display = "none";
                 PgAnnonce.style.display = "none";
                 PGcalender.style.display = "none";
                 PgEDT.style.display = "none";
                 PPggAbsence.style.display =" none";
                 break;
          case "Annonce" : 
          PgAnnonce.style.display = "block";
                 Apayer.style.display = "none";
                 PgNote.style.display = "none";
                 PGcalender.style.display = "none";
                 PgEDT.style.display = "none";
                 PgProfil.style.display = "none";
                 PPggAbsence.style.display =" none";
                 break;
          case "Edt" : 
                PgEDT.style.display = "block";
                 Apayer.style.display = "none";
                 PgNote.style.display = "none";
                 PgAnnonce.style.display = "none";
                 PGcalender.style.display = "none";
                 PgProfil.style.display = "none";
                 PPggAbsence.style.display =" none";
                 break;
          case "Absence" : 
              PPggAbsence.style.display =" block";
                 Apayer.style.display = "none";
                 PgNote.style.display = "none";
                 PgAnnonce.style.display = "none";
                 PGcalender.style.display = "none";
                 PgEDT.style.display = "none";
                 PgProfil.style.display = "none";
                 break;
          case "Payer" : 
                 Apayer.style.display = "block";
                 PgNote.style.display = "none";
                 PgAnnonce.style.display = "none";
                 PGcalender.style.display = "none";
                 PgEDT.style.display = "none";
                 PgProfil.style.display = "none";
                 PPggAbsence.style.display =" none";
                 break;
          case "Note" : 
                PgNote.style.display = "block";
                 Apayer.style.display = "none";
                 PgAnnonce.style.display = "none";
                 PGcalender.style.display = "none";
                 PgEDT.style.display = "none";
                 PgProfil.style.display = "none";
                 PPggAbsence.style.display =" none";
                 break;
          case "Agenda" : 
              PGcalender.style.display = "flex";
                 Apayer.style.display = "none";
                 PgNote.style.display = "none";
                 PgAnnonce.style.display = "none";
                 PgEDT.style.display = "none";
                 PgProfil.style.display = "none";
                 PPggAbsence.style.display =" none";
                 break;
        }
      });
    });



//INteraction acceuil
var btnAcc = document.querySelectorAll('.blockGrid .flottantebox .boxKely');
    btnAcc.forEach(function(btnAccach){
      btnAccach.addEventListener("click" , function(){
         window.scrollTo(0,0);
         homePageGG.style.display = "none";
         navVertical.style.display = "block";
         toggle.style.display = "flex";
         versHome.style.color = "var(--blackbe)";
         versHome.style.background = "var(--white)";
          btnVert.forEach((initialisationVert)=>{
            initialisationVert.style.background = "transparent";
            initialisationVert.style.color = "var(--white)";
          });
          PgNotif.style.display = "none";
          
        switch (this.id){
          case "ProfilAcc" : 
            PgProfil.style.display = "grid";
            Profil.style.background = "var(--white)";
            Profil.style.color = "var(--violet)";
            break;
          case "AnnonceAcc" : 
          PgAnnonce.style.display = "block";
            Annonce.style.background = "var(--white)";
            Annonce.style.color = "var(--violet)";
            break;
          case "EDTAcc" : 
            PgEDT.style.display = "block";
            Edt.style.background = "var(--white)";
            Edt.style.color = "var(--violet)";
            break;
          case "AbsenceAcc" : 
          PPggAbsence.style.display =" block";
            Absence.style.background = "var(--white)";
            Absence.style.color = "var(--violet)";
            break;
          case "ApayerAcc" : 
            Apayer.style.display = "block";
            Payer.style.background = "var(--white)";
            Payer.style.color = "var(--violet)";
            break;
          case "NoteAcc" : 
          PgNote.style.display = "block";
            Note.style.background = "var(--white)";
            Note.style.color = "var(--violet)";
            break;
          case "CalendrierAcc" : 
          PGcalender.style.display = "flex";
            Agenda.style.background = "var(--white)";
            Agenda.style.color = "var(--violet)";
            break;
        };

      });
    });