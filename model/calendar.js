const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;


const eventSchema = Schema({
    title:{ type:String, required:true},
    dateBegin:{type: Date,required:true},
    dateEnd:{type: Date, required:true},
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("event", eventSchema);
