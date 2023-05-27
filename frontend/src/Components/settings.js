import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../App.css";
import Button from "react-bootstrap/Button";
import img from "./images/defaultuser.png";
import Upload from "./images/Upload-icon.png";
import { useParams } from "react-router-dom";

export default function Settings() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
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
      // password: pass,
      // confirmPassword: cpass,
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
  };

  return (
    <div className="settings-container">
      <div className="side-panel">
        <h1 className="Settings Title">Settings</h1>
        <h6>Account</h6>
      </div>
      <div className="settings-content">
        <div className="column-setting">
          <div className="image-container">
            <img src={imgSrc} alt="Logo" className="logo-image" />
            <div className="upload-logo">
              <label htmlFor="upload-input" className="upload-button">
                <span className="upload-button-text">
                  <img src={Upload} alt="Update Logo" className="upload-icon" />
                </span>
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>

          <br />
          <form className="Settings-form" onSubmit={handleSubmit} noValidate>
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
            <br />
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
            <br />
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

            <div className="button-container">
              <button type="submit" className="btn btn-success btn-lg">
                Save
              </button>
            </div>

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
            <div className="Settings-DU-button">
              <button >
                Update Password
              </button>{" "}
              <h6>
              </h6>
              <button >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}