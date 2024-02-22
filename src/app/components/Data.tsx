'use client'
import { useState, useEffect } from 'react';

interface Values {
  fuel:number;
}


export default function LiveDataDisplay() {
    const [liveData, setLiveData] = useState<Values | null>(null);
    const [fetching, setFetching] = useState(false); // Initial state: fetching enabled

    const fetchData = async () => {
      try {
          const response = await fetch('/api/liveData');
          if (!response.ok) {
              throw new Error('Failed to fetch live data');
          }
          const data = await response.json();
          setLiveData(data);
      } catch (error) {
          console.error('Error fetching live data:', error);
      }
  };

  const sendPostRequest = async () => {
    try {
      const response = await fetch('/api/liveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: 700099 }) // Send the value here
      });
      if (!response.ok) {
        throw new Error('Failed to send data');
      }
      const data = await response.json();
      setLiveData(data);
      // Update state if necessary
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const toggleFetching = () => {
    setFetching(!fetching); // Toggle fetching state
  };

    useEffect(() => {
        if(fetching){
          const interval = setInterval(() => {
            fetchData();
          }, 2000);
      
        fetchData(); // Fetch data immediately when component mounts

        return () => clearInterval(interval);
        }
      }, []);
  
    
    return (
        <div>
            <div>
                {liveData && (
                    <div>
                        <p>Fuel: {liveData.fuel}</p>
                    </div>
                )}
            </div>
            <button className="btn btn-dark" onClick={toggleFetching}>{fetching ? 'Stop Fetching' : 'Start Fetching'}</button>
            <button onClick={() => {
              sendPostRequest()}}
              >Send Data</button>
        </div>
    );
}
