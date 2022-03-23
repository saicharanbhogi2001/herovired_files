var express=require('express');
var app=express();
app.use(express.static("contents"));
const Portfolio=require('./contents/schema');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//connecting to data base
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://saicharanbhogi:rssscharan.1352@cluster0.fcbfo.mongodb.net/assignment?retryWrites=true&w=majority').then(()=>{
    console.log("Connected to mongodb")
});
const connection=mongoose.connection;
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/contents/main.html");
});
app.get("/getdata",(req,res)=>{
    Portfolio.findOne({Name:"BHOGI SAI CHARAN"},function(err,result){
            if(err || result==null){
                console.log(err)
            }
            else if (result!=undefined){
                res.send(result);
            }

            
    })
});

app.listen(3000,()=>console.log("Server Started"));