// This code allows for handling of live coordinates and additional marker functionality.
// View Deployed GitHub repo 'DemoGaugeBoard' to see how to implement it.
'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import mapStyles from './../mapData/mapStyles.json';

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
  radius: 10, // in meters// Initialize center with first coordinate
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
  controlButton.style.margin = '8px 10px 22px';
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


const Map = ({ coordinate }: { coordinate: google.maps.LatLngLiteral }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<google.maps.Circle | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);


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

      circleRef.current = new google.maps.Circle(circleOptions);
      circleRef.current.setMap(map);
      
      const svgMarker = {
        path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "blue",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(0, 20),
      };
      
      map.addListener('click', (event: google.maps.MapMouseEvent) => {
        const clickedPosition = event.latLng ? event.latLng.toJSON() : null;
        if (clickedPosition) {
          const marker = new google.maps.Marker({
            position: clickedPosition,
            icon: svgMarker,
            map: map,
          });
  
          // Add click event listener to the marker
          marker.addListener('click', () => {
            marker.setMap(null); // Remove the clicked marker from the map
            setMarkers((prevMarkers) => prevMarkers.filter((m) => m !== marker)); // Remove the clicked marker from the markers state
          });
  
          // Add the marker to the markers array
          setMarkers((prevMarkers) => [...prevMarkers, marker]);
        }
      });

    };

    // Call the initMap function
    initMap();
  }, []);

  // Update the circle position based on currentIndex and isMoving state
  useEffect(() => {

    if (circleRef.current) {
      circleRef.current.setCenter(coordinate);
    }
       
  }, [coordinate]);

  return (
    <div className="h-100 w-100">
      <div ref={mapRef} className="h-100 w-100 map-container border border-secondary rounded-4"/>
    </div>
  );
};

export default Map;
