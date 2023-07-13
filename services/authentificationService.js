const bcrypt = require("bcrypt");
const User = require('../model/user') ;




const login = async (user,request) => {
    try {
        const stateConnection = verifyIfAlreadyConnected(request);
        if (stateConnection) return request?.session?.role;
        const userConnected = await checkPasswordUser(user);
        if (userConnected.status == 200) request.session.user = userConnected;
        return userConnected;
    } catch (error) {
        throw error;
    }
}

const verifyIfAlreadyConnected = (request) => {

    if (request?.session?.user) {
        return true;
    }
    return false;
}
 
const  addUser = async (user) => {
    try {
        const userModel = new User();
        userModel.nom = user.Nom;
        userModel.prenom = user.Prenom;
        userModel.adresseEleve = user.AdresseEleve;
        userModel.numeros = user.Numero;
        userModel.email = user.Email;
        userModel.password = await encryptPassword(user.MotDePasse);
        userModel.nomPere = user.nomPere;
        userModel.proffesionPere = user.ProfessionPere;
        userModel.dateNaissance = user.dateNaissance;
        userModel.adressePere = user.AdressePere;
        userModel.numerosPere = user.NumeroPere;
        userModel.nomMere = user.NomMere;
        userModel.proffesionMere = user.ProfessionMere;
        userModel.numerosMere = user.NumeroMere;
        userModel.adresseMere = user.AdresseMere;
        // userModel.classe = user.Classe;
        userModel.role = "user";
        userModel.genre = user.gender;
        return new Promise((resolve, reject) => {
            userModel.save((err) => {
                if (err) {
                    console.log(err);
                    reject(`cant post user : server failed`);
                }
                resolve(userModel);
            })
        })
    } catch (error) {
        throw ` Error : ${error}`;
    }
}

const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10).then((hash) => {
            resolve(hash);
        }).catch((error) => { 
            const errorMessages = "Error Password";
            console.log(error);
            reject(errorMessages); 
        });
    })
}

const checkPasswordUser = async (user) => {
    try {

        return new Promise((resolve, reject) => {
            User.findOne({ email: user.email }, async (err, userBase) => {
                if (err) { 
                    console.log(err);
                    reject("ErrorServeur");
                };
                // De lasa stocké ao anaty argument userBase ilay document an'ilay user itany(tous)
                if (userBase !== null ) {
                    const resultCheck = await comparePasswordencrypted(user.password , userBase.password);
                    if (resultCheck) {
                        // Mila ataontsika anatin'ito res ito all info anle user fa io ampesaintsika any amle ejs aveo {AFAKA ANTAnIANA AHO; ANDERSON}
                        const res = {
                            email : userBase.email,
                            name : userBase.nom,
                            role : userBase.role,
                            status : 200
                        }
                        resolve(res);
                    }   
                    // ETO API POST PASSWORD INCORECT
                    resolve({status: 403, message: 'Mot de passe incorrect'})
                    
                    // reject('Password incorrect');
                } else {
                    // ETO API POST GMAIL NOT FOUND 404
                    resolve({status: 403, message: "Votre email n'est pas inscrit"})
                    // reject('Email not found , please try again with your correct gamil');
                };
            });
        });
    } catch (error) {
        throw `error : ${error}`
    }
};

const comparePasswordencrypted = (inputPassword, databasePassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, databasePassword).then((valid) => {
            if (valid) {
                resolve(true);
            };
            resolve(false);
        }).catch((error) => {
            reject(`Error on compare Password ${error}`);
        });
    });
};





module.exports = {
    addUser,
    verifyIfAlreadyConnected,
    login,

}