import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../App.css";
import { Modal, ModalHeader } from "reactstrap";
import Button from "react-bootstrap/Button";
import img from "./images/defaultuser.png";
import Upload from "./images/Upload-icon.png";
import { useParams } from "react-router-dom";
import img1 from "./images/navLogo.png";
import { NavLink } from "react-router-dom";

export default function Settings(props) {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [mod, setMod] = useState("false");
  // const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  // const [cpass, setcPass] = useState("");
  const [imgSrc, setImgSrc] = useState(img);

  const navigate = useNavigate();

  const { id } = useParams();

  const token = localStorage.getItem("accessToken");

  const headers = {
    Authorization: token,
    "Content-Type": "application/json",
  };

  // fetching image and name from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/userProfile/${id}`,
          { headers }
        );
        setUser(response.data.details);
        console.log("This is the data from the backend >>>>>>>", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);
  const handleUnameChange = (e) => {
    e.preventDefault()
    setUname(e.target.value)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Create a FileReader object
      const reader = new FileReader();

      reader.onload = () => {
        // Update the image source with the selected file
        setImgSrc(reader.result);
      };

      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name,
      username: uname,
      email,
      password: pass,
      //confirmPassword: cpass,
    };

    try {
      // Send the updated settings to the backend API
      const { data } = await axios.patch(
        `http://localhost:4000/user/userProfile/:${id}`,
        values,
        { headers }
      );

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Settings Updated Successfully");
        navigate(`/Dashboard/${id}`);
      }
    } catch (error) {
      // Display error message received from the backend
      const errorMessage = error.response.data.message;
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Modal
        className="pop1"
        contentClassName="pop1"
        size="lg"

        isOpen={props.modal1}
        toggle={() => props.setmodal1(!props.modal1)}

      >
        <ModalHeader>
          {" "}
          <img
            src={img1}
            className=" card-img-top"
            alt="Logo"
            width="400"
            height="250"
          />
        </ModalHeader>{" "}
        <br />{" "}
        <h4 className="quicksand18 alignCenter" style={{ color: "grey" }}>
          <b>Please enter your password.</b>
        </h4>
        <br />
        <form
          action="POST"
          className="login-form"
          onSubmit={handleSubmit}
          novalidate
        >
          <label htmlFor="email" className="form-label"></label>
          <input
            value={pass}
            required
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="password"
            name="password "
            placeholder="Enter-Password"
            className="email "
          />
          <br />

          <br />
          <div className="text-center">
            <button type="submit" className=" but btn btn-primary  " onCLi>
              <h5>Submit</h5>
            </button>
          </div>
        </form>
      </Modal>
      <div className="container gap ">
        <div className="row">
          <div className="col-md-3 ">
            <h1 className="quicksand20">Settings</h1>
            <hr />

            <ul className=" navbar-nav me-auto mb-2 mb-lg-0 quicksand17  ">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={{ font: "Montserrat", fontSize: 30 }}
                  to={`/Dashboard/settings/${id}`}
                >
                  My Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={{ font: "Montserrat", fontSize: 30 }}
                  to="/confirmPW"
                >
                  Edit Password
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => props.setmodal(true)}
                  style={{ font: "Montserrat", fontSize: 30 }}
                  to={`/Dashboard/settings/${id}`}
                >
                  Delete Account
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-6 ">
            <div className="circle ">
              <img
                src={imgSrc}
                alt="Logo"
                className="logo-image "
                height="200px"
                width="200px"
              />
            </div>
            {/*<div className="upload-logo">*/}
            <label htmlFor="upload-input" className="upload-button shift">
              <span className="upload-button-text">
                <img
                  src={Upload}
                  alt="Update Logo"
                  className="upload-icon"
                  height="60px"
                  width="60px"
                />
              </span>
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>

            <br />
            <form className="quicksand15" onSubmit={handleSubmit}>
              <strong>
                <label htmlFor="Name" className="form-label">
                  FullName
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className=" form-control"
                  id="Name"
                  value={name || user.name}
                />
                <br />
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  onChange={handleUnameChange}
                  type="text"
                  id="Username"
                  className=" form-control"
                  value={uname || user.username}
                />
                <br />
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  value={email || user.email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  className=" form-control"
                />

                <br />

                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  onClick={() => props.setmodal1(true)}
                >
                  Save
                </button>

                {/* <br />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={pass}
              placeholder={user.password}
              required
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              name="password "
              className="email form-control"
            />
            <br />
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password*
            </label>

            <input
              value={cpass}
              required
              onChange={(e) => setcPass(e.target.value)}
              type="password"
              id="confirmpassword"
              name="Confirmpassword "
              className="email form-control"
            /> */}

                <br />
              </strong>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

//  export default Settings;

