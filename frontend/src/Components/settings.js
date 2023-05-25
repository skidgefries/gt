import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../App.css"

export default function Settings() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    preferences: {
      theme: "",
      language: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the updated settings to the backend API
      const response = await axios.patch(`http://localhost:4000/plans/plan/:id`, formData);

      // Display success message
      toast.success("Settings updated successfully");

      // Redirect to home page or any other desired location
      navigate("/");
    } catch (error) {
      // Display error message received from the backend
      const errorMessage = error.response.data.message;
      toast.error(errorMessage);
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAccountClick = () => {
    // Handle click on "Account" button
    // You can implement the logic for account settings here
    console.log("Account settings clicked");
  };

  const handlePreferencesClick = () => {
    // Handle click on "User Preferences" button
    // You can implement the logic for user preferences settings here
    console.log("User Preferences clicked");
  };

  return (
    <div className="settings-container">
      <div className="side-panel">
        <h1 className="Settings Title">Settings</h1>
        <button className="side-panel-button" onClick={handleAccountClick}>
          Account
        </button>
        <button className="side-panel-button" onClick={handlePreferencesClick}>
          User Preferences
        </button>
      </div>
      <div className="settings-content">
        <div className="column">
          
        </div>
      </div>
    </div>
  );
}
