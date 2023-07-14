
const form = document.getElementById('loginform');



  /*<----------validation -------------------->*/

  form.addEventListener('submit',function(e){
    e.preventDefault();
    if (validEmail(form.Email)){
      form.submit();
    } else{
   alert("email non valid")
    }
   })
 
  
  /*<----------validation email-------------------->*/
form.Email.addEventListener('change',function(){
  validEmail(this);
})
const validEmail = function(inputEmail) {

  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'
  );

  let testEmail = emailRegExp.test(inputEmail.value) 
  let small = inputEmail.nextElementSibling;
    
  if(testEmail){
    small.innerHTML =''
    small.classList.remove('text-danger');
    small.classList.add('text-succes')
    return true;
  }
  else{
    small.innerHTML = 'Adresse non valide'
    small.classList.remove('text-succes');
    small.classList.add('text-danger')
    return false;
  };

}



  /*<----------validation password-------------------->*/
form.MotDePasse.addEventListener('change',function(){
  validPassword(this);
})


const validPassword= function(inputMotDePasse) {

  let msg;
  let valid =false;

  if(inputMotDePasse.value.length < 3){
    msg='Le mot de passe doit contenir au moins 3 caracteres'
  }
  else if(!/[A-Z]/.test(inputMotDePasse.value)){
       msg='Le mot de passe doit contenir au moins 1 majuscule'
  }
  else if(!/[a-z]/.test(inputMotDePasse.value)){
    msg='Le mot de passe doit contenir au moins 1 minuscule'
  }

  else if(!/[0-9]/.test(inputMotDePasse.value)){
    msg='Le mot de passe doit contenir au moins 1 chiffre'
  }

  else {
    msg='Le mot de passe est valide'
    valid ='true'
  }

   //affichage
   let small = inputMotDePasse.nextElementSibling;
    
   if(valid){
     small.innerHTML =''
     small.classList.remove('text-danger');
     small.classList.add('text-succes')
     return true;
   }
   else{
     small.innerHTML = msg;
     small.classList.remove('text-succes');
     small.classList.add('text-danger')
     return false;
   };
};




  /*<----------validation Nom-------------------->*/
  form.nomMere.addEventListener('change',function(){
    validNom(this); 
  })
  form.nomPere.addEventListener('change',function(){
    validNom(this); 
  })
  form.Nom.addEventListener('change',function(){
    validNom(this); 
  })
  const validNom = function(inputNom) {
  
    let msg;
    let valid =false;
  
     if(!/^[A-Z]/.test(inputNom.value)){
      msg = 'Le nom doit commencer par une majuscule';
    }

    else if(/[0-9]/.test(inputNom.value)){
      msg='Le Nom ne doit pas contenir au moins 1 chiffre'
    }
  
    else {
      msg='Le Nom est valide'
      valid ='true'
    }
  
     //affichage
     let small = inputNom.nextElementSibling;
      
     if(valid){
       small.innerHTML =''
       small.classList.remove('text-danger');
       small.classList.add('text-succes')
       return true;
     }
     else{
      small.innerHTML = msg;
      small.classList.remove('text-succes');
      small.classList.add('text-danger')
      return false;
    };
  
  }



    /*<----------validation Prenom-------------------->*/
    form.Prenom.addEventListener('change',function(){
      validPrenom(this); 
    })
    const validPrenom= function(inputPrenom) {
    
      let msg;
      let valid =false;
    
       if(!/^[A-Z]/.test(inputPrenom.value)){
        msg = 'Le Prenom doit commencer par une majuscule';
      }
  
      else if(/[0-9]/.test(inputPrenom.value)){
        msg='Le Prenom ne doit pas contenir de chiffre'
      }
    
      else {
        msg='Le Prenom est valide'
        valid = true;
      }
    
       //affichage
       let small = inputPrenom.nextElementSibling;
        
       if(valid){
         small.innerHTML =''
         small.classList.remove('text-danger');
         small.classList.add('text-succes')
         return true;
       }
       else{
        small.innerHTML = msg;
        small.classList.remove('text-succes');
        small.classList.add('text-danger')
        return false;
      };
    }
    

        /*<----------validation Numero-------------------->*/
        form.NumeroPere.addEventListener('change',function(){
          validNumero(this); 
        })
        form.NumeroMere.addEventListener('change',function(){
          validNumero(this); 
        })
        form.Numero.addEventListener('change',function(){
          validNumero(this); 
        })
        const validNumero = function(inputNumero) {
          let msg;
          let valid =false;
         
           if(!/^[0-9]+$/.test(inputNumero.value)){
            msg = 'Le Numero doit contenir que des chiffres';
          
          }
        
          else {
            msg='Le Numero est valide'
            valid = true;
          }
        
           //affichage
           let small = inputNumero.nextElementSibling;
            
           if(valid){
             small.innerHTML =''
             small.classList.remove('text-danger');
             small.classList.add('text-succes')
             return true;
           }
           else{
            small.innerHTML = msg;
            small.classList.remove('text-succes');
            small.classList.add('text-danger')
            return false;
          };
        
        }
