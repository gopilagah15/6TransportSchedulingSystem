// components/DispatchForm.js
import React, { useState } from 'react';

const DispatchForm = ({ onDispatch }) => {
  const [vehicle, setVehicle] = useState('');
  const [driver, setDriver] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trip = { vehicle, driver, destination, distance: parseFloat(distance) };
    onDispatch(trip);
    setVehicle('');
    setDriver('');
    setDestination('');
    setDistance('');
  };

  return (
    <div>
      <h2>Dispatch Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Driver"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="number"
          placeholder="Distance (km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button type="submit">Dispatch</button>
      </form>
    </div>
  );
};

export default DispatchForm;
