const express= require("express");
const mongoose= require("mongoose");
const cors=require("cors");
const app=express();
const routes=require("./routes")

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://jack:jack7775@cluster0.laeue8t.mongodb.net/?retryWrites=true&w=majority", {usenewurlparser:true},{useunifiedtopology:true}).then(()=>{    
    console.log("connection");
}).catch((err)=>{
    console.log("not connected");
})  

app.use("/",routes);


app.listen(4000, function(){
    console.log('working1');
})