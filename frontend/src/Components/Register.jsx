import React, { useState, Component } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import img1 from "./images/navLogo.png";
import {Modal, ModalHeader} from "reactstrap";
import{Link} from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Register = (props) => {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setcPass] = useState("");
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");

  async function Submit(e) {
    e.preventDefault();
    const values = {
      name,
      email,
      username: uname,
      password: pass,
      confirmPassword: cpass,
    };
    const data = await axios.post("http://localhost:4000/user/signup", values);
    if(data.error){
      toast.error(data.error);
    }
    else{
          
          toast.success('Registered successfully.Proceed to Login');
          navigate("/Login");
          
        }
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

  return (
    <div className="center2">
    <div className="bg5 ">

<Modal
      className="pop2"
      contentClassName="pop2"
      size='lg'
      isOpen={true}
      toggle={()=>props.setmodal(!props.modal)}><ModalHeader> 
      <div className="rightCross"><NavLink className="nav-link " to="../Home"><AiFillCloseCircle/></NavLink> </div>
        <div className="aligncenter"> 
                 
        <h1 >Create a Guided Travels account</h1>
        <div className="quicksand"><h2 style={{color:"#574A4A" }}><i>WE PLAN, YOU PACK</i></h2>
        <h8 style={{color:"#736A6A"}} >Experience the beauty of Nepal.</h8></div>
        </div> 
</ModalHeader>   
<div className="quicksand18"> 
      <form action="POST" className="login-form" onSubmit={Submit}>
        <label htmlFor="Name" >FullName*</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          className="email"
        />
        
        <label htmlFor="Username">Username*</label>
        <input
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          type="username"
          className="email"
        />
     <label htmlFor="email">E-mail*</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="email"
        />
        
        <label htmlFor="password">Password*</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password "
          className="email"
        />
      
        <label htmlFor="password">Confirm Password*</label>
        <input
          value={cpass}
          onChange={(e) => setcPass(e.target.value)}
          type="password"
          id="confirmpassword"
          name="Confirmpassword "
          className="email"
        />
        <br/>
        <button type="submit" className="btn btn-success btn-lg">SignUp</button>
      </form>
      <div className="text-center">
     <Link to="../Login"><button className="btn btn-link" >
     <h5 >Already have an account? Login Here.</h5>
   </button></Link> 
      </div>
      </div>
</Modal>


</div>    
    </div>
  );
};
