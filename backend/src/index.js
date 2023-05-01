const express=require("express")
const app=express()
const path = require("path")
const hbs=require("hbs")
const collection=require("./mongodb")


//const templatePath=path.join('new','../templates')

app.use(express.json())
app.set("view engine","hbs")
//app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("home")
})



/*app.get('/', function(req, res, next) {
    res.send("Hello world");
}); */

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{    // async and await functions

const data={
    name:req.body.name,
    password:req.body.password
}

await collection.insertMany([data]) //insertMany->syntax for mongodb
    
res.render("homesignedin")


})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async (req,res)=>{    // async and await functions

   try{
    const check=await collection.findOne({name:req.body.name})
    if(check.password===req.body.password){
        res.render("homesignedin")
    }
    else{
        res.send("wrong password")
    }
   }

   catch{

    res.send("wrong details")
   }    
    
    })
    



app.listen(4000,()=>{
    console.log("port connected");

})


