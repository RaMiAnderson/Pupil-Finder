const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const annonceSchema = Schema({
    contenu : {type : String, required : true},
    datePub : {type: Date, required: true}
});
module.exports = mongoose.model("annonce", annonceSchema);
