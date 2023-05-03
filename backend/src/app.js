const express=require("express")
const app=express()
const cookieParser=require('cookie-parser')
const cors=require("cors")
app.use(cors())
const port='4000'

//const templatePath=path.join('new','../templates')


app.use(express.json())
app.listen(port,()=>{
    console.log(`server started on port ${port}`);

})

app.use(cookieParser());


const planRouter=require('../routes/planRoutes')
const userRouter=require('../routes/userRoutes')
app.use("/plans",planRouter);
app.use("/user",userRouter);
