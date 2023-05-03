 import React, { useState,Component } from "react";
 import axios from 'axios';



 export const Register = (props) =>{

    // constructors(){
        // super()
        // this.state={
        //     name:'',        
        //     pass:'',       
        //     email:'',        
        //     Name:'',        
        //     Name:'',        
        // }

    const [email , setEmail]= useState('');
    const [pass , setPass]= useState('') ;
    const [cpass , setcPass]= useState('') ;
    const [name , setName]= useState('') ;
    const [uname , setUname]= useState('');

        async function Submit(e)
        {
            e.preventDefault();
            console.log(email);
            const values = {
                name, 
                email, 
                username: uname,
                password: pass, 
                confirmPassword: cpass, 
            }
            console.log(values)
            const res = await axios.post('http://localhost:4000/user/signup', values);
            console.log(res)
            


        }

        // const handleApi =async ()=>{
        //     console.log(email,pass)
        //     axios.post('',{
        //         email:email,
        //         password:pass,
        //         cpassword:cpass,
        //         name:name,
        //         uname:uname
        //     })
        //     .then(result=>{
        //         console.log(result.data)
        //     })
        //     .catch(err=>{
        //         console.lod(err)
        //     })
        // }
        
    return(
        <div className= "auth-form-container">
            <h2>SignUp</h2>
            <form action="POST" className="login-form" onSubmit={Submit}>
              <label htmlFor = "Name">FullName</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="name"/>
              <label htmlFor = "Username">username</label>
              <input value={uname} onChange={(e) => setUname(e.target.value)} type="username"/>
              <label htmlFor ="email">Email</label>
              <input value = {email} onChange={(e) => setEmail(e.target.value)}type="email"/>
              <label htmlFor="password">Password</label>
              <input value={pass} onChange={(e)=> setPass(e.target.value)}type = "password" placeholder="****** " id="password" name="password "/>
              <label htmlFor="password">Confirm Password</label>
              <input value={cpass} onChange={(e)=> setcPass(e.target.value)}type = "password" placeholder="****** " id="confirmpassword" name="Confirmpassword "/>
              <button type="submit">SignUp</button>
              
            </form> 
            <button onClick={()=> props.onFormSwitch('login')}>Already have an account? Login Here. </button>
        </div>
    )
}
