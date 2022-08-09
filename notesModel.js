const mongoose=require("mongoose");


const notesSchema = {

    cname:String,
    address:String,
    sno:String,
    itemname:String,
    quantity:String,
    price:String

}

const Note=  mongoose.model("Note", notesSchema);

module.exports=Note;