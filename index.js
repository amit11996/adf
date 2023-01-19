var express= require("express")
var app=express();
var path=require("path");
const p = path.join(__dirname,"am.html")
app.get("/demo", function(req,res){
    res.sendFile(p)
})
app.listen(4000);