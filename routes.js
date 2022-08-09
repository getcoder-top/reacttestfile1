const express = require("express")
const router = express.Router();
const Note = require("./notesModel");


router.post("/create", (req,res)=>{
    const newNote= new Note({
        cname:req.body.cname,
        address: req.body.address,
        sno:req.body.sno,
        itemname:req.body.itemname,
        quantity:req.body.quantity,
        price:req.body.price

    })
    newNote.save()
    .then(data=>{
        res.json(data)
    }).catch(error=>{
        console.log("not posted")
    })
})


module.exports=router;