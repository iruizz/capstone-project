'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from './../mapData/mapStyles.json';
import coordinates from './../mapData/coordinates.json';

// Initial position of the map
const position: google.maps.LatLngLiteral = {
  lat: 42.504909,
  lng: -90.679664,
};

// Map options including center, zoom, and styles
const mapOptions: google.maps.MapOptions = {
  center: position,
  zoom: 15,
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  mapTypeControlOptions: {
    mapTypeIds: ["roadmap", "terrain", "satellite"],
  },
};

// Circle options including style and initial center
const circleOptions: google.maps.CircleOptions = {
  fillColor: '#FFD700', // Gold color
  fillOpacity: 0.2,
  strokeColor: '#FFD700', // Gold color
  radius: 10, // in meters
  center: coordinates[0], // Initialize center with first coordinate
};

// Creates a control that recenters the map on Chicago
function createCenterControl(map: google.maps.Map) {
  const controlButton = document.createElement('button');

  // Set CSS for the control
  controlButton.style.backgroundColor = '#fff';
  controlButton.style.border = '2px solid #fff';
  controlButton.style.borderRadius = '3px';
  controlButton.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlButton.style.color = 'rgb(25,25,25)';
  controlButton.style.cursor = 'pointer';
  controlButton.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlButton.style.fontSize = '16px';
  controlButton.style.lineHeight = '38px';
  controlButton.style.margin = '8px 0 22px';
  controlButton.style.padding = '0 5px';
  controlButton.style.textAlign = 'center';

  controlButton.textContent = 'Center Map';
  controlButton.title = 'Click to recenter the map';
  controlButton.type = 'button';

  // Setup the click event listeners: simply set the map to Chicago
  controlButton.addEventListener('click', () => {
    map.setCenter(position);
  });

  return controlButton;
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<google.maps.Polyline | null>(null);
  const circleRef = useRef<google.maps.Circle | null>(null);
  const [route, setRoute] = useState<google.maps.LatLngLiteral[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  // Initialize the map and draw the polyline and circle
  useEffect(() => {
    const initMap = async () => {
      // Check if the Google Maps API key is provided
      if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        console.error('Missing or Invalid Google Maps API key!');
        return;
      }

      // Initialize the Google Maps loader
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
        language: 'en',
        libraries: ['places'],
      });

      // Import the Map className from the Google Maps library
      const { Map } = await loader.importLibrary('maps');

      // Create the map instance
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Create the DIV to hold the control
      const centerControlDiv = document.createElement('div');
      // Create the control
      const centerControl = createCenterControl(map);
      // Append the control to the DIV
      centerControlDiv.appendChild(centerControl);

      // Push the control to the top center position of the map
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);

      // Draw the polyline and circle
      pathRef.current = new google.maps.Polyline({
        path: route,
        geodesic: true,
        strokeColor: '#7700FF',
        strokeOpacity: 1.0,
        strokeWeight: 4,
      });
      pathRef.current.setMap(map);

      circleRef.current = new google.maps.Circle(circleOptions);
      circleRef.current.setMap(map);
    };

    // Call the initMap function
    initMap();
  }, []);

  // Update the circle position based on currentIndex and isMoving state
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isMoving) {
        let newRoute;
        if (route.length < 50) {
          newRoute = [...route, coordinates[currentIndex]];
        } else {
          newRoute = [...route.slice(-49), coordinates[currentIndex]];
        }

        setRoute(newRoute);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % coordinates.length);
        if (circleRef.current) {
          circleRef.current.setCenter(coordinates[currentIndex]);
        }
        if (pathRef.current) {
          pathRef.current.setPath(route);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, isMoving, route]);

  return (
    <div className="h-100 w-100">
      <div ref={mapRef} className="h-100 w-100 map-container border border-secondary rounded-4 " />
      <div className="row justify-content-center mt-3">
        <div className="text-center">
          <button
            onClick={() => {
              setCurrentIndex(0);
              setRoute([]);
            }}
            className="btn bg-black bg-gradient text-light mx-2"
          >
            Reset
          </button>
          <button
            onClick={() => setIsMoving(!isMoving)}
            className="btn bg-black bg-gradient text-light mx-2"
          >
            {isMoving ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
