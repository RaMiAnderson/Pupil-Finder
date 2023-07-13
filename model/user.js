const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = Schema({
    //Unique id created automatically by the mongoose
    nom: { type: String, required: true },
    prenom:{type : String, required: true},
    genre:{type : String, required: true , Enumerator : ["Homme" , "Femme"]},
    dateNaissance:{type : Date, required: true},
    adresseEleve:{type : String, required: true},
    email: { type: String, required: true, unique: true },
    numeros: { type: String, required: true, unique: true },
    classe: { type: mongoose.Schema.Types.ObjectId, ref: 'Classe' },
    role: { type: String, default: 'user' },
    password: { type: String, required: true },
    nomPere : {type : String, required : true},
    adressePere : {type : String, required :true},
    adresseMere : {type : String, required :true},
    proffesionPere : {type: String, required : true},
    numerosPere : {type : String, required :true},
    nomMere : {type : String, required :true},
    proffesionMere : {type: String, required : true},
    numerosMere : {type : String, required :true}
});


//nasina unique plugin uniqValidator mba ho Unique
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
