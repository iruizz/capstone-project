import React from 'react';
import Feature from '../general/Feature';

export default function Features() {
  return (
    <div className="container-fluid bg-black bg-gradient text-white border border-secondary rounded-4">
      <h1 className="py-3 border-bottom text-center">Features Overview</h1>
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 pt-5">
        <div className="col d-flex flex-column align-items-start">
          <h2 className="fw-bold">Dune Buggy Data Hub:</h2>
          <h2 className="fw-bold mb-5"> Unveiling Essential Insights</h2>
          <p className="text-body-light">
            Engineered with precision sensors and a 4G module for seamless connectivity. 
            Monitor vital metrics like GPS coordinates, temperature, acceleration, and voltage levels in real-time. 
            Our system provides detailed retention data for each data point, ensuring efficient analysis and optimization. 
          </p>
          <a href="#" className="btn btn-purple btn-lg text-center">Primary button</a>
        </div>
        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <Feature
              title="Temperatures"
              description="Important live monitoring of CVT Belt and Brake Temperatures"
              icon="bi-thermometer-half"
            />
            <Feature
              title="GPS Tracking"
              description="Using Google Maps API we show the live vehicle location and path traveled."
              icon="bi-geo"
            />
            <Feature
              title="Historical Analysis"
              description="Multiple Historical Analysis Tools to view past run data."
              icon="bi-calendar3"
            />
            <Feature
              title="Other"
              description="Various Gauges show other data points derived from the sensor data."
              icon="bi-speedometer"
            />
          </div>
        </div>
      </div>
      <h1 className="text-center py-3 border-top border-bottom">Common Visual Data Tools</h1>
      {/* Additional Features */}
      <div className="row row-cols-1 row-cols-md-2 g-5 pt-5">
  {/* First column */}
  <div className="col">
    <div className="row row-cols-1 row-cols-sm-2 mx-2 g-4">
      <Feature
        title="Map"
        description="Provides the live vehicle location and driven path."
        icon="bi bi-map"
      />
      <Feature
        title="Speedometer"
        description="Derives speed of the vehicle from GPS sensor data."
        icon="bi bi-speedometer2"
      />
      <Feature
        title="Temperatures"
        description="Monitoring temperature of the CVT Belt and Brakes."
        icon="bi bi-thermometer-half"
      />
      <Feature
        title="Connection Status"
        description="Shows embedded to website connection status."
        icon="bi bi-toggles"
      />
    </div>
  </div>
  {/* Second column */}
  <div className="col">
    <div className="row row-cols-1 row-cols-sm-2 mx-2 g-4">
      <Feature
        title="Acceleration Pedal Position"
        description="Tracks the position of the acceleration pedal."
        icon="bi bi-device-ssd-fill"
      />
      <Feature
        title="Brake Pedal Position"
        description="Tracks the position of the brake pedal."
        icon="bi bi-arrow-down-up"
      />
      <Feature
        title="Fuel"
        description="Remaining fuel is derived from fuel flow data."
        icon="bi bi-fuel-pump"
      />
      <Feature
        title="Accelerometer"
        description="Measures acceleration along three axes: X, Y, and Z."
        icon="bi bi-badge-3d"
      />
      {/* Add more features here */}
    </div>
  </div>
</div>

    </div>
  );
}
