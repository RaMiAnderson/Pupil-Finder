
const Annonce = require('../model/annonce');




const getAllAnnonce  = async () =>{
    try{
        return new Promise( (resolve , reject) => {
            Annonce.find( {} , (err, userBase) => {
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

const deleteAnnonceByIdentifiant = async (Id) => {
    try {
        return await Annonce.findOneAndDelete( { _id : Id } );
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllAnnonce,
    deleteAnnonceByIdentifiant
}