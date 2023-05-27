import React, { useEffect } from "react";
import { useRef, useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "../App.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useDispatch } from "react-redux";
import { setTrip } from "../redux/trip/tripSlice";
import { reset, setItinerary} from "../redux/ititnerary/itinerarySlice";

export default function PlanTrip(props) {
  const dispatch = useDispatch()

  const [selected, setSelected] = useState(null);


  useEffect(()=>{
    dispatch(reset())
  }, [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map selected={selected}  setSelected={setSelected}/>;
  
}

function Map({selected, setSelected}) {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  // const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="column4">
        <PlacesAutocomplete selected = {selected} setSelected={setSelected} />
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

const PlacesAutocomplete = ({ selected, setSelected }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dateInputRef = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);
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

  // async function Submit(e) {
  //   e.preventDefault();
  //   try {
  //     console.log(value);
  //     const values = {
  //       name: value,
  //       startDate,
  //       endDate,
  //     };
  //     console.log(values);
  //     const res = await axios.post("http://localhost:4000/plans/plan", values);
  //     if (res.error) {
  //       toast.error(res.error);
  //     } else {
  //       localStorage.setItem("planId", res.data.planId);
  //       const ID = localStorage.getItem("planId");
  //       toast.success("Start Planing");
  //       history(`/LoginHome/plans/plan/${ID}`);
  //     }
  //   } catch (err) {
  //     toast.error("error");
  //     console.log(err);
  //   }
  // }

  function Submit(e){
    e.preventDefault();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMilliseconds = Math.abs(end - start);
    const days = Math.floor((diffInMilliseconds / (1000 * 60 * 60 * 24))+1);
    console.log(days);
    setResult(days);
    const tripDetail ={ 
      geoLocation: selected,
      location: value,
      noOfDays: days, 
      startDate,
      endDate
      
    };

    dispatch(setTrip(tripDetail));
    console.log()
    if (value && days){ 
      navigate("/LoginHome");
      dispatch(setItinerary(days));};
  }


  return (
    <div>
      <div className="center2">
        <div className=" bg6">
          <div className="cross1">
            <NavLink className="nav-link " to="../Home">
              
            </NavLink>{" "}
          </div>{" "}
          <br />
          <form
            action="POST"
            className="login-form"
            onSubmit={Submit}
            novalidate
          >
          <div className="quicksand20 black">
            <b>Plan a New Trip</b>
          </div>
            <Combobox onSelect={handleSelect}>
              <label htmlFor="destination" className="form-label quicksand18">
                <b>Destination*</b>
              </label>
              <br />
              <ComboboxInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className="email1"
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
              className="email1 "
              id="startDate"
              onChange={handleChange1}
              ref={dateInputRef}
            />

            <label htmlFor="endDate" className="form-label quicksand18">
              <b>End Date*</b>
            </label>
            <input
              type="date"
              className="email1 "
              id="endDate"
              onChange={handleChange2}
              ref={dateInputRef}
            />
            <br />
            <div className="places-container">

            </div>
            <div className="aligncenter1">
              <br/>
              <button
                type="submit"
                // onClick={calculateDaysBetweenDates}
                className="btn btn-danger btn-lg"
              >
                Start Planning
              </button>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};