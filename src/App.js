// App.js
import React, { useState } from 'react';
import DispatchForm from './components/DispatchForm';
import RouteOptimization from './components/RouteOptimization';
import FuelCostCalculator from './components/FuelCostCalculator';
import TripLogReport from './components/TripLogReport';

const App = () => {
  const [trips, setTrips] = useState([]);

  const handleDispatch = (trip) => {
    setTrips([...trips, trip]);
  };

  return (
    <div>
      <h1>Transport Scheduling System</h1>
      <DispatchForm onDispatch={handleDispatch} />
      <RouteOptimization />
      <FuelCostCalculator trips={trips} />
      <TripLogReport trips={trips} />
    </div>
  );
};

export default App;
