import React,{ useState } from "react";
import {PropTypes} from 'prop-types';

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) =>{

  const history=useNavigate()

    const [email , setEmail]= useState('');
    const [pass , setPass]= useState('') ;

          async function Submit(e)
          {
            e.preventDefault();
            try{
              console.log(email);
              const values = {
                  email, 
                  password: pass, 
              }
              console.log(values)
              const res = await axios.post('http://localhost:4000/user/login', values)
              .then(res=>{
                  if(res.data="User found"){
                  history("/Register",{state:{id:email}})
                  }

                  else if(res.data="User Not logged in"){
                    alert("Not signed up")
                  }
              })
              console.log(res)
            }

            catch(err){
              alert("Wrong Details")
              console.log(err);
            }
        }
    return(
        <div className="auth-form-container">
          <h2>Login</h2>

        
        
            <form action='POST' className="login-form" onSubmit={Submit}>
              <label htmlFor = "email">email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)}type = "email" placeholder="youremail@gmail.com" id="email" name="email"/>
              <label htmlFor = "password">password</label>
              <input value={pass} onChange={(e)=> setPass(e.target.value)}type = "password" placeholder="****** " id="password" name="password "/>
              <button type="submit" onClick={() => props.onFormSwitch('main')} >Login</button>
            </form>
            
          <button onClick={() => props.onFormSwitc('register')}>Don't have an account? SignUp. </button>

        </div>
        
    ) ;
}