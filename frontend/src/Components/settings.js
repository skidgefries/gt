import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../App.css";
import img5 from "./images/pkh.webp";
import { useParams } from "react-router-dom";

export default function Settings() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [cpass, setcPass] = useState("");   

  const navigate = useNavigate();

  const { id } = useParams();

  const token = localStorage.getItem("accessToken");

  const headers = {
    Authorization: token,
    'Content-Type': 'application/json',
  };
  // fetching image andname from database
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

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    preferences: {
      theme: "",
      language: "",
    },
  });

  async function Submit(e) {
    e.preventDefault();
    const values = {
      name,
      username: uname,
      email,
      password: pass,
      confirmPassword: cpass,
    };

    try {
      
      // Send the updated settings to the backend API
      const { data } = await axios.patch(
        `http://localhost:4000/user/userProfile/${id}`,
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
  }



 
 

  return (
    <div className="settings-container">
      <div className="side-panel">
        <h1 className="Settings Title">Settings</h1>
        <h6>
          Account
        </h6>
      </div>
      <div className="settings-content">
        <div className="column-setting">
          <img
            src={img5}
            alt="Logo"
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
            }}
          />
          <form
            action="PATCH"
            className="login-form needs-validation"
            onSubmit={Submit}
            novalidate
          >
            <label htmlFor="Name" className="form-label">
              FullName
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="email form-control"
              id="Name"
              value={name}
              placeholder={user.name}
              required
            />

            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              onChange={(e) => setUname(e.target.value)}
              placeholder={user.username}
              type="text"
              id="Username"
              className="email form-control"
              value={uname}
              required
            />

            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              value={email}
              placeholder={user.email}
              required
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              className="email form-control"
            />

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
            />

            <br />
            <button type="Submit" className="btn btn-success btn-lg">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}