const mongoose = require("mongoose")

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