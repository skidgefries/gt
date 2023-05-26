
import React, { useState } from "react";
// import { PropTypes } from "prop-types";
import { toast } from "react-hot-toast";
import { Container } from "@mui/material";
import { Modal, ModalHeader } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import img1 from "./images/navLogo.png";

export default function ConfirmPW(props) {
//   const history = useNavigate();

const [pass, setPass] = useState("");
const [cpass, setcPass] = useState("");



//   async function Submit(e) {
//     e.preventDefault();
//     try {
//       console.log(email);
//       const values = {
//         email,

//       };
//       console.log(values);
//       const res = await axios.post("http://localhost:4000/user/login", values);
//       if (res.error) {
//         toast.error(res.error);
//       } else {
//         props.onFormSwitch(res.data.accessToken);
//         localStorage.setItem("userId", res.data.user_id);
//         toast.success("Logged in successfully");
//         const userId = localStorage.getItem("userId");
//         history(`/Dashboard/${userId}`);
//       }
//     } catch (err) {
//       toast.error("error");
//       console.log(err);
//     }
//   }


  return (
    <div className="center2">
      <div className=" bg5 ">
        <Modal
          className="pop1"
          contentClassName="pop1"
          size="lg"
          isOpen={true}
          toggle={() => props.setmodal(!props.modal)}
        >
          <ModalHeader>
            {" "}
            <div className="cross">
              <NavLink className="nav-link " to="../Home">
                <AiFillCloseCircle />
              </NavLink>{" "}
            </div>{" "}
            <img
              src={img1}
              className=" card-img-top"
              alt="Logo"
              width="400"
              height="250"
            />
          </ModalHeader>{" "}
          <br />{" "}
          <h4 className="quicksand18 alignCenter" style={{  color:'grey' }}><b>Please enter your new password.</b></h4>
          <form
            action="POST"
            className="login-form"
            // onSubmit={Submit}
            novalidate
          >
          <br/>
        <input
          value={pass}
          required
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password "
          placeholder="New-password"
          className="email "
        />
        <br/>
        <input
          value={cpass}
          required
          onChange={(e) => setcPass(e.target.value)}
          type="password"
          id="confirmpassword"
          placeholder="Re-Enter New-password"
          name="Confirmpassword "
          className="email"
        />

            <br />
            <div className="text-center">
              <button type="submit" className=" but btn btn-primary  ">
                <h5>Submit</h5>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};
