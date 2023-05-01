const mongoose=require("mongoose")


mongoose.connect("mongodb://0.0.0.0:27017/LoginSignUp") //connect node to mongodb //LoginSignup->name of database
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log(`failed to connect : ${err}`);
})



/*

const mongoDB="mongodb://localhost:27017/LoginSignUp";

mongoose.connect(mongoDB, (err) =>{
    if(err) console.log(`unable to connect to the server : ${err}`);
    else
    console.log("mongodb is connected");
}) //connect node to mongodb //LoginSignup->name of database
*/




const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})


//define the collection

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection