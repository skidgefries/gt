
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

export default function ForgetPW(props) {
//   const history = useNavigate();

  const [email, setEmail] = useState("");



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
          <h4 className="quicksand18 alignCenter" style={{  color:'grey' }}><b>Please enter your email address<br/> to recover your account.</b></h4>
          <form
            action="POST"
            className="login-form"
            // onSubmit={Submit}
            novalidate
          >
            <label htmlFor="email" className="form-label"></label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-mail"
              id="email"
              name="email"
              className="email "
              value={email}
              required
            />
            <br />

            <br />
            <div className="text-center">
            <NavLink
            to="/confirmPW"
          >
              <button type="submit" className=" but btn btn-primary  ">
                <h5>Submit</h5>
              </button>
              </NavLink>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};