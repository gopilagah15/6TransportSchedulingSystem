// components/TripLogReport.js
import React from 'react';

const TripLogReport = ({ trips }) => {
  return (
    <div>
      <h2>Trip Log Report</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            Vehicle: {trip.vehicle}, Driver: {trip.driver}, Destination: {trip.destination}, Distance: {trip.distance} km
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripLogReport;
