// const classe = require('../model/classe');
const Matiere = require('../model/matiere');
const temporaryData = require('../tmp/temporaryData');



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


const addMatiere = (dataMatiere) => {
    try {
        const matiereModel = new Matiere();

        matiereModel.nomMatiere = dataMatiere.nomMatiere;
        matiereModel.nomProf = dataMatiere.nomProf;
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


// const addClasse = (dataClasse) => {
//     try {
//         const classeModel = new classe();

//         classeModel.nomClasse = dataClasse.nomClasse;
//         classeModel.coeff = dataClasse.coeff;
//         classeModel.matiere = dataClasse.matiere;
//     }
//     catch (err) {
//         throw `ERROR : ${err}`;
//     }
// }


module.exports = {
    getMatiereDispo,


    addMatiere,
    // addClasse,
    NombreMatiere
}