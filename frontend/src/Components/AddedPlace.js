import React, { useState, useEffect } from 'react';

const AddedPlace = ({ data }) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if(data){
    const fetchAddresses = async () => {
      const apiKey = 'AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q'; // Replace with your actual API key

      const getAddress = async (lat, lng) => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
          );
          const data = await response.json();
          if (data.results.length > 0) {
            const address = data.results[0].formatted_address;
            return address;
          } else {
            return;
            // return 'No address found for the provided coordinates.';
          }
        } catch (error) {
          console.error('Error:', error);
          return 'Error fetching address.';
        }
      };

      const addresses = await Promise.all(
        data.map((item) => getAddress(item.lat, item.lng))
      );

      setAddresses(addresses);
        };

    fetchAddresses();}
  }, [data]);

  return (
    <div>
      {addresses.map((address, index) => (
        <h1 key={index}>{address}</h1>
      ))}
    </div>
  );
};

export default AddedPlace;
