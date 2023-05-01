const mongoose=require("mongoose")

const str= ("mongodb+srv://pranawrajkafleprk:HaaSoDXOAxWdgyNe@cluster0.hpybsct.mongodb.net/GuidedTravels");
mongoose.connect(str)
//mongoose.connect("mongodb://0.0.0.0:27017/LoginSignUp") //connect node to mongodb //LoginSignup->name of database
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




