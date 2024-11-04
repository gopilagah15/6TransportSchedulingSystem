// components/FuelCostCalculator.js
import React from 'react';

const FuelCostCalculator = ({ trips }) => {
  const fuelRatePerKm = 0.5; // Example rate in currency units per km

  const calculateFuelCost = (distance) => (distance * fuelRatePerKm).toFixed(2);

  return (
    <div>
      <h2>Fuel Cost Calculation</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            {trip.vehicle} to {trip.destination} - Fuel Cost: ${calculateFuelCost(trip.distance)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuelCostCalculator;
