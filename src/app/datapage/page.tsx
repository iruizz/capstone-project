'use client'
import { useState, useEffect } from "react";

interface Run {
  runID: string;
  timestamp: string;
  dataframe: {
    temp1: {
      temp: number;
      ambientTemp: number;
    };
    temp2: {
      temp: number;
      ambientTemp: number;
    };
    flow: number;
    coordinate: {
      lat: number;
      lng: number;
    };
  };
}

function ClientPage() {
  const [runs, setRuns] = useState<Run[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRunID, setSelectedRunID] = useState<string | null>(null);
  const [selectedRuns, setSelectedRuns] = useState<Run[]>([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/liveData");
      const data = await response.json();
      setRuns(data);
    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSpecificRun = (runID: string) => {
    const runsWithID = runs.filter((run) => run.runID === runID);
    setSelectedRuns(runsWithID);
    setSelectedRunID(runID);
  };

  const sendSensorData = async () => {
    try {
      const dataToSend = {
        runID: '2',
        timestamp: new Date().toISOString(),
        dataframe: {
          temp1: { temp: 27, ambientTemp: 37 },
          temp2: { temp: 37, ambientTemp: 47 },
          temp3: { temp: 47, ambientTemp: 57 },
          flow: 6,
          coordinate: { lat: 100, lng: 200 },
        }
      };

      const response = await fetch("/api/liveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        throw new Error("Failed to send sensor data");
      }

      // Refresh data after sending sensor data
      fetchData();
    } catch (error) {
      console.error("Error sending sensor data:", error);
    }
  };

  return (
    <div className="my-5 py-5 text-light">
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error fetching data...</p>
      ) : (
        <div>
          <button onClick={fetchData}>Refresh Data</button>
          <button onClick={sendSensorData}>Send Sensor Data</button>

          <div>
            {Array.from(new Set(runs.map((run) => run.runID))).map((runID) => (
              <button key={runID} onClick={() => fetchSpecificRun(runID)}>
                Run ID: {runID}
              </button>
            ))}
          </div>

          {selectedRuns.length > 0 && (
            <div>
              <h2>Selected Run: {selectedRunID}</h2>
              {selectedRuns.map((run) => (
                <div key={run.timestamp}>
                  <div className="run-data">
                    <p>Run ID: {run.runID}</p>
                    <p>Timestamp: {run.timestamp}</p>
                    <p>Temperature 1: {run.dataframe.temp1.temp}</p>
                    <p>Ambient Temperature 1: {run.dataframe.temp1.ambientTemp}</p>
                    <p>Temperature 2: {run.dataframe.temp2.temp}</p>
                    <p>Ambient Temperature 2: {run.dataframe.temp2.ambientTemp}</p>
                    <p>Flow: {run.dataframe.flow}</p>
                    <p>Latitude: {run.dataframe.coordinate.lat}</p>
                    <p>Longitude: {run.dataframe.coordinate.lng}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ClientPage;


