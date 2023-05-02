 import React, { useState } from "react";


 export const Register = (props) =>{

    const [email , setEmail]= useState('');
    const [pass , setPass]= useState('') ;
    const [name , setName]= useState('') ;
    const [uname , setUname]= useState('');

        const handleSubmit =(e) =>
        {
            e.preventDefault();
            console.log(email);

        }
        
    return(
        <div className= "auth-form-container">
            <h2>SignUp</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor = "Name">FullName</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="name"/>
              <label htmlFor = "Username">username</label>
              <input value={uname} onChange={(e) => setUname(e.target.value)} type="username"/>
              <label htmlFor ="email">Email</label>
              <input value = {email} onChange={(e) => setEmail(e.target.value)}type="email"/>
              <label htmlFor="password">Password</label>
              <input value={pass} onChange={(e)=> setPass(e.target.value)}type = "password" placeholder="****** " id="password" name="password "/>
              <button type="submit">SignUp</button>
              
            </form> 
            <button onClick={()=> props.onFormSwitch('login')}>Already have an account? Login Here. </button>
        </div>
    )
}
