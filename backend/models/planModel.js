const mongoose = require("mongoose")
const str= ("mongodb+srv://pranawrajkafleprk:HaaSoDXOAxWdgyNe@cluster0.hpybsct.mongodb.net/GuidedTravels")


mongoose.connect(str)
//mongoose.connect("mongodb://0.0.0.0:27017/LoginSignUp") //connect node to mongodb //LoginSignup->name of database
.then(()=>{
    console.log("plandb connected");
})
.catch((err)=>{
    console.log(`failed to connect : ${err}`);
})

const planSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      }

});

//model

const planModel=mongoose.model
('planModel',planSchema);

module.exports=planSchema;