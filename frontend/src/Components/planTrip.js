import React from "react";
import { useState } from "react";
// import { Modal, ModalHeader } from "reactstrap";
// import { NavLink } from "react-router-dom";
//import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { toast } from "react-hot-toast";

import {SkeletonText,} from "@chakra-ui/react";
import {  Autocomplete,  useJsApiLoader} from "@react-google-maps/api";

export default function PlanTrip (props)  {
  const navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });
  const [Destination, setDestination] = useState("");

  // const dateInputRef = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
 
  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function Submit(e) {
    e.preventDefault();
        try {
      console.log(Destination);
      const values = {
        Destination,
        startDate,
        endDate,
      };
      console.log(values);
      //const data = await axios.post("http://localhost:4000/plans/plan/d", values);
      toast.success("Data added successfully");
      const res = await axios.post("http://localhost:4000/plans/suruko", values);
    
      
      if (res.error) {
        toast.error(res.error);
      }
      else {
        toast.success("Data added successfully");
        navigate("/LoginHome");
      }
    } catch (err) {
      alert("Wrong Details");
      console.log(err);
    }
  }

  return (
    <div className="center2">
      <div className=" bg5 ">
        {/*<Modal
          className="pop3"
          contentClassName="pop3"
          size="lg"
          isOpen={true}
          toggle={() => props.setmodal(!props.modal)}
          <ModalHeader>
          {" "}
          <div className="cross1">
          <NavLink className="nav-link cross1 " to="../Home">
          <AiFillCloseCircle />
          </NavLink>{" "}
          </div>{" "}
          <div className="quicksand20">
          <b>Plan a New Trip</b>
          </div>
          </ModalHeader>{" "}
        >*/}
          <br />
          <h1> Plan a new trip</h1>
          <form
            action="post"
            className="login-form"
            onSubmit={Submit}
            novalidate
          >
            <label htmlFor="Destination" className="form-label"></label>
             <Autocomplete options={{ types: ["(regions)"] }}
             onPlaceChanged={() => console.log("place changed")}
           >
             <input
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                placeholder="Where?"
                id="Destination"
                name="Destination"
                className="email "
                value={Destination}
                required
                />                
                </Autocomplete>

            <label htmlFor="startDate" className="form-label quicksand18">
              <b>Start Date*</b>
            </label>
            <input
              type="date"
              className="email "
              id="startDate"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              required
              //ref={dateInputRef}
            />

            <label htmlFor="endDate" className="form-label quicksand18">
              <b>End Date*</b>
            </label>
            <input
              type="date"
              className="email "
              id="endDate"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              required
             // ref={dateInputRef}
            />
            {/*<p>Selected Date: {date}</p>*/}
            <br />
            <div className="aligncenter1">
              
                <button type="submit" className="btn btn-danger btn-lg">
                  Start Planning
                </button>
              
            </div>
            <br />
            <br />
          </form>        
      </div>
      <div>
      </div>
    </div>
  );
}
