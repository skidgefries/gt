import React,{ useState } from "react";
import {PropTypes} from 'prop-types';


export const Login = (props) =>{
    const [email , setEmail]= useState('');
    const [pass , setPass]= useState('') ;

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email);

      }
    return(
        <div className="auth-form-container">
          <h2>Login</h2>

        
        
            <form className="login-form" onSubmit={handleSubmit}>
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