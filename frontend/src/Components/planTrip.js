import React from "react";
import { useRef, useState, useEffect, useMemo } from "react";
import { Modal, ModalHeader } from "reactstrap";
import { NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {Autocomplete,  useLoadScript,  GoogleMap,  GoogleApiWrapper,  Marker} from "@react-google-maps/api";
import usePlacesAutocomplete, {  getGeocode,  getLatLng,} from "use-places-autocomplete";
import { SkeletonText } from "@chakra-ui/react";
import "../App.css";
import {  Combobox,  ComboboxInput,  ComboboxPopover,  ComboboxList,  ComboboxOption,} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function PlanTrip(props) {
  // const [date, setDate] = useState("");
  
  
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });
  
  if (!isLoaded) return <div>Loading...</div>;
  
  // const handleDestinationChange = (e) => {
    //   setDestination(e.target.value);
    // };
    
    
    // const handleDestinationSelect = (selectedValue) => {
      //   setDestination(selectedValue);
      // };
      
      
      
      return <Map />;
      // return (
        //   <div className="center2">
        //     <div className=" bg5 ">
        //       {/*<Modal
        //         className="pop3"
        //         contentClassName="pop3"
        //         size="lg"
        //         isOpen={true}
  //         toggle={() => props.setmodal(!props.modal)}
  //       >
  //         <ModalHeader>
// {" "} */}
//       <div className="cross1">
//         <NavLink className="nav-link " to="../Home">
//           <AiFillCloseCircle />
//         </NavLink>{" "}
//       </div>{" "}
//       <div className="quicksand20">
//         <b>Plan a New Trip</b>
//       </div>
//       {/*</ModalHeader>{" "}*/}
//       <br />
//       <form action="POST" className="login-form" onSubmit={Submit} novalidate>
//         <label htmlFor="destination" className="form-label"></label>
//         {/* <Autocomplete
//           value={destination}
//           onChange={handleDestinationChange}
//           // onChange={(e) => setDestination(e.target.value)
//           //pac-container={{ zIndex: 10000 }}
//           >
//           <input
//             // onChange={handleDestinationChange}
//             // onSelect={handleDestinationSelect}
//             type="text"
//             placeholder="Where?"
  //             id="destination"
  //             name="destination"
  //             className="email"
  //             required
  //           />
//          </Autocomplete> */}



//         <label htmlFor="startDate" className="form-label quicksand18">
//           <b>Start Date*</b>
//         </label>
//         <input
//           type="date"
//           className="email "
  //           id="startDate"
  //           onChange={handleChange1}
  //           ref={dateInputRef}
  //         />
  
  //         <label htmlFor="endDate" className="form-label quicksand18">
  //           <b>End Date*</b>
  //         </label>
  //         <input
  //           type="date"
  //           className="email "
  //           id="endDate"
  //           onChange={handleChange2}
  //           ref={dateInputRef}
  //         />
  //         {/*<p>Selected Date: {date}</p>*/}
  //         <br />
  //         <div className="places-container">
          
  //       {/* <PlacesAutocomplete setSelected={setSelected} /> */}
  //     </div>
  
  //         <div className="aligncenter1">
  //           <button
  //             type="submit"
  //             onClick={calculateDaysBetweenDates}
  //             className="btn btn-danger btn-lg"
  //           >
  //             Start Planning
  //           </button>
  //         </div>
  //         <br />
  //         <br />
  //       </form>
  //       {/*  </Modal> */}
  //     </div>
  //   </div>
  // );
}

function Map() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="column4">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
        >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}
const PlacesAutocomplete = ({ setSelected }) => {
  const dateInputRef = useRef(null);
 // const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);
  //const [selected, setSelected] = useState(null);
  const history = useNavigate();
  
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };


  const handleChange1 = (e) => {
    setStartDate(e.target.value);
  };
  const handleChange2 = (e) => {
    setEndDate(e.target.value);
  };
  
  async function Submit(e) {
    e.preventDefault();
    try {
      console.log(destination);
      const values = {
        name: destination,
        startDate,
        endDate,
      };
      console.log(values);
      const res = await axios.post("http://localhost:4000/plans/plan", values);
      if (res.error) {
        toast.error(res.error);
      } else {
        localStorage.setItem("Id", res.data.planId);
        const ID = localStorage.getItem("Id");
        toast.success("Start Planing");
        history(`/LoginHome/plans/plan/${ID}`);
      }
    } catch (err) {
      toast.error("error");
      console.log(err);
    }
  }
  const calculateDaysBetweenDates = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMilliseconds = Math.abs(end - start);
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    setResult(days);
  };
  console.log(startDate, endDate);
  console.log(result);

  return (
<div>



  <div className="center2">
    <div className=" bg5 ">
     
      <div className="cross1">
        <NavLink className="nav-link " to="../Home">
          <AiFillCloseCircle />
        </NavLink>{" "}
      </div>{" "}
      <div className="quicksand20">
        <b>Plan a New Trip</b>
      </div>
      <br />
      <form action="POST" className="login-form" onSubmit={Submit} novalidate>
 <Combobox onSelect={handleSelect}>
 <label htmlFor="destination" className="form-label quicksand18">
  <b>Destination</b>
 </label>
  <br />
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="email"
        placeholder="Where?"
        
        />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
              ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>

        <label htmlFor="startDate" className="form-label quicksand18">
          <b>Start Date*</b>
        </label>
        <input
          type="date"
          className="email "
          id="startDate"
          onChange={handleChange1}
          ref={dateInputRef}
          />

        <label htmlFor="endDate" className="form-label quicksand18">
          <b>End Date*</b>
        </label>
        <input
          type="date"
          className="email "
          id="endDate"
          onChange={handleChange2}
          ref={dateInputRef}
          />
        {/*<p>Selected Date: {date}</p>*/}
        <br />
        <div className="places-container">
        
      {/* <PlacesAutocomplete setSelected={setSelected} /> */}
    </div>

        <div className="aligncenter1">
          <button
            type="submit"
            onClick={calculateDaysBetweenDates}
            className="btn btn-danger btn-lg"
            >
            Start Planning
          </button>
        </div>
        <br />
        <br />
      </form>
      {/*  </Modal> */}
    </div>
  </div>
            </div>   
);

};