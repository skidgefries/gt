import React, { useRef } from 'react'
import { Box, Button, Flex, Input, SkeletonText } from "@chakra-ui/react";
import {
  Autocomplete,
} from "@react-google-maps/api";
import AddedPlace from './AddedPlace';
import { useDispatch } from 'react-redux';
import { setItinerary, setItinerary2 } from '../redux/ititnerary/itinerarySlice';



export default function AddPlace({ data, index , setlat1, setlng1 }) {
  const dispatch = useDispatch();

  const locationRef = useRef();

  function Point(index) {
    if (locationRef.current.value === "") {
      return;
    }
  
    const apiKey = "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q";
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${locationRef.current.value}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("banepa", data);
        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          // setlat1(lat);
          // setlng1(lng);
          const geoLocation =  {lat, lng};
          console.log(geoLocation)
          // dispatch(setItinerary(geoLocation))
          dispatch(setItinerary2({geoLocation, index}))
        } else {
          console.log(
            "Geocoding failed. Please check the address and API key."
          );
        }
      });
  }
console.log(index)
  return (
    <>
      <div className="accordion" id={`accordion-${data}`}>
        <div className="accordion-item">
    
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${data}`}
              aria-expanded="true"
              aria-controls={`collapse-${data}`}
            >
              Day {index}
            </button>
          </h2>
          <AddedPlace data={data}/>
          <div
            id={`collapse-${index}`}
            className="accordion-collapse collapse show"
            data-bs-parent={`#accordion-${index}`}
          >
          <Box flexGrow={1}>
          <Autocomplete>
            <Input
              type="text"
              placeholder="Add a place"
              ref={locationRef}
            />
          </Autocomplete>
          </Box>
            <div className="accordion-body alignCenter">
            <Button colorScheme="purple" type="submit" onClick={()=>Point(index)}>
              Add
            </Button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}