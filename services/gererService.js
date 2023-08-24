const classe = require('../model/classe');
const Matiere = require('../model/matiere');
const temporaryData = require('../tmp/temporaryData');
const User = require('../model/user');
const Prof = require("../model/prof");
const Annonce = require('../model/annonce');
// const UserService = require('../services/userService');



const getMatiereDispo = async (role) => {
    try{
        if(role !== "admin") return false
        else return new Promise( (resolve, reject) => {
            Matiere.find( {} , (err,matierBase) =>{
                if (err) {
                    console.log(err);
                    reject("ErrorServeur");
                }
                resolve(matierBase);
            });
        });

    }
    catch (err) {
        const messageError = "Erreur : Server failed";
        console.log(err);
        throw messageError;
    }
}



const addMatiere = async (dataMatiere) => {
    try {
        const matiereModel = new Matiere();
        const ProfCorespondant = await getOneProff(dataMatiere.emailProf);
        matiereModel.nomMatiere = dataMatiere.nomMatiere;
        matiereModel.emailProf = dataMatiere.emailProf;
        matiereModel.nomProf = ProfCorespondant.prenom ;
        
        await Prof.findOneAndUpdate( 
            {email: dataMatiere.emailProf} ,
            { $set: {fonction : dataMatiere.nomMatiere} },
            (err, updatedDocument) => {
                if (err) console.log(err);
            });

        return new Promise( (resolve,reject) => {
            matiereModel.save( (err) => {
                if (err) {
                    console.log(err);
                    reject("Error: post matiere failed");
                }
                resolve(matiereModel);
            })
        });
    }
    catch (err){
        throw ` ERROR : ${err} `
    }
}

const addAnnonceService = (annonce) => {
    try {
        const date = new Date();
        const annonceModel = new Annonce();

        annonceModel.contenu = annonce.annonceContent;
        annonceModel.datePub = date;
        return new Promise( (resolve,reject) => {
            annonceModel.save( (err) => {
                if (err) {
                    console.log(err);
                    reject("Error: post matiere failed");
                }
                resolve(annonceModel);
            })
        });
    }
    catch (err){
        throw ` ERROR : ${err} `
    }
}


const NombreMatiere = async (nombre) => {
    if ( (nombre >= 0) && (typeof(nombre) == "number") ){
        temporaryData.dataNombreMatiere = nombre;
        return nombre
    } 
    else{
        temporaryData.dataNombreMatiere = undefined;
        return 0;
    } 
}


const structureDataClasse = async  (classe) => {
    const nombreMatiere = await temporaryData.dataNombreMatiere;
    let listMatiereClasse = [];
    let listCoeffMatiere = [];
    for (var i = 0 ; i < nombreMatiere; i++){
        // alaina izay matière sy coeff de sarahana anaty tab distinct
        var matiere = classe[`nomMatiere${i}`];
        var coeff = classe[`coeffMatiere${i}`];

        listMatiereClasse.push(matiere);
        listCoeffMatiere.push(coeff);
    }
   
    let structuredData = {
        nomClasse: classe.nomClasse,
        listMatiere : listMatiereClasse,
        listCoeff : listCoeffMatiere
    }
    return structuredData;
} 

 

const addClasse = (dataClasse) => {
    try {
        const classeModel = new classe();

        classeModel.nomClasse = dataClasse.nomClasse;
        classeModel.matiere = dataClasse.listMatiere;
        classeModel.coeff = dataClasse.listCoeff;

        return new Promise((resolve, reject) => {
            classeModel.save( (err) => {
                if (err){
                    console.log(err);
                    reject("ERROR: Post class Failed");
                }
                resolve(classeModel)
            })
        });
    }
    catch (err) {
        throw `ERROR : ${err}`;
    }
}


const getClasseDispo = async (role) => {
    try {
        if(role !== "admin") return false
        else {
            return new Promise( (resolve,reject) => {
                classe.find( {} , (err,classeBase) => {
                    if(err){
                        console.log(err);
                        reject("ErrorServeur");
                    }
                    resolve(classeBase)
                })
            });
        };
    }
    catch (err){
        const messageError = "Erreur : Server failed";
        console.log(err);
        throw messageError;
    }
}

const getNumInClasse = async (Classe) => {
    try{
        return new Promise( (resolve, reject) => {
            User.find( {classe : Classe } ,(err, userBase) => {
                if (err) {
                    console.log(err);
                    reject("ErrorServeur");
                }
                const tabUserBase = userBase;
                const calculNum = tabUserBase.length + 1;
                resolve(calculNum);
            })
        });
    }
    catch (err) {
        console.log(err)
    }
}

const getAllUsers = async () => {
    try{
        return new Promise( (resolve , reject) => {
            User.find( {role: "user" } , (err, userBase) => {
                if (err){
                    console.log(err);
                    reject("Errreur Server");
                }
                resolve(userBase);
            })
        })
    }
    catch (err) {
        console.log(err);
        throw "ERROR SERVER"
    }
}

const getAllProff = async (role) => {
    try{
        if (role === "admin") {
         return new Promise( (resolve , reject) => {
            Prof.find( {} , (err, userBase) => {
                if (err){
                    console.log(err);
                    reject("Errreur Server");
                }
                resolve(userBase);
            })
        })
        }else return false;
    }
    catch (err) {
        console.log(err);
        throw "ERROR SERVER"
    }
}

const getOneProff = async (email) => {
    try{
         return new Promise( (resolve , reject) => {
            Prof.findOne( {email : email} , (err, userBase) => {
                if (err){
                    console.log(err);
                    reject("Errreur Server");
                }
                resolve(userBase);
            })
        })
    }
    catch (err) {
        console.log(err);
        throw "ERROR SERVER"
    }
}

const getOneClass = async (id) => {
    try{
         return new Promise( (resolve , reject) => {
            classe.findOne( {_id : id} , (err, userBase) => {
                if (err){
                    console.log(err);
                    reject("Errreur Server");
                }
                resolve(userBase);
            })
        })
    }
    catch (err) {
        console.log(err);
        throw "ERROR SERVER"
    }
}



const getMatriculeClasse = async () => {
    try {
        return new Promise( (resolve, reject) => {
            User.find( {role : "user"} , (err,userBase) => {
                if (err) {
                    console.log(err);
                    reject("ErrorServeur");
                }
                const tabUserBase = userBase;
                const matriculBase = 100;
                const calculMatricule = matriculBase + tabUserBase.length + 1;
                resolve(calculMatricule);
            })
        });
    }
    catch (err) {
        console.log(err);
    }
}

const deleteUserByIdentifiant = async (Identifiant) => {
    try {
        return await User.deleteOne({email: Identifiant});
    }
    catch (err) {
        console.log(err);
    }
}

const deleteProfByIdentifiant = async (Id) => {
    try {
        await Matiere.findOneAndUpdate( 
            {emailProf: Id} ,
            { $set: { emailProf : "none" , nomProf : "none"} },
            (err, updatedDocument) => {
                if (err) console.log(err);
            });
        return await Prof.deleteOne({email: Id});
    }
    catch (err) {
        console.log(err);
    }
}

const deleteMatiereByIdentifiant = async ( Identifiant ) => {
    try {
        return await Matiere.deleteOne({ _id : Identifiant});
    }
    catch (err) {
        console.log(err);
    }
}

const deleteClasseByIdentifiant = async ( Identifiant ) => {
    try {
        return await classe.deleteOne({ _id : Identifiant });
    }
    catch (err) {
        console.log(err);
    }
}




const getAllUserInOneClass = async (classe) => {
    try {
        return new Promise( ( resolve, reject) => {
            User.find( {classe : classe , role : "user"} , (err,userBase) => {
                if (err) console.log(err);
                resolve(userBase);
            })
        });
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    getMatiereDispo,
    getNumInClasse,
    getMatriculeClasse,

    structureDataClasse,
    addMatiere,
    addClasse,
    NombreMatiere,
    getClasseDispo,
    getAllUsers,
    getAllProff,
    addAnnonceService,
    getOneProff,
    getAllUserInOneClass,
    getOneClass,

    deleteUserByIdentifiant,
    deleteMatiereByIdentifiant,
    deleteClasseByIdentifiant,
    deleteProfByIdentifiant
}