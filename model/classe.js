const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const classeSchema = Schema({
    nomClasse : {type : String, required : true},
    matiere : [{ type: mongoose.Schema.Types.ObjectId, ref: 'matiere'}],
    // coeff : [{type: string , required : true}]
});
module.exports = mongoose.model("classe", classeSchema);
