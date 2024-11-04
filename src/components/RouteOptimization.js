// components/RouteOptimization.js
import React from 'react';

const RouteOptimization = () => {
  const suggestRoute = () => {
    alert("Optimal route suggestion: Take the highway for faster travel.");
  };

  return (
    <div>
      <h2>Route Optimization Alert</h2>
      <button onClick={suggestRoute}>Get Route Suggestion</button>
    </div>
  );
};

export default RouteOptimization;
