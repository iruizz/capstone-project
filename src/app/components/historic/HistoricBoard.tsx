'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const DynamicLineChart = dynamic(() => import('@/app/components/datahub/LineChart'), {
  ssr: false,
});
const DynamicDoubleLineChart = dynamic(() => import('./DoubleLineChart'), {
  ssr: false,
});

interface LineChartDataPoint {
  time: string;
  value: number;
}

interface Run {
  runID: string;
  timestamp: string;
  dataframe: {
    speed: number;
    temp: number;
    accel:number;
    fuel: number;
  };
}

export default function GaugeBoard() {
  const [showAllGauges, setShowAllGauges] = useState(false);
  const [runs, setRuns] = useState<Run[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [tempData, setTempData] = useState<LineChartDataPoint[]>([]);
  const [speedData, setSpeedData] = useState<LineChartDataPoint[]>([]);
  // Other state variables...

  const fetchSpecificRun = (runID: string) => {
    const runsWithID = runs.filter((run) => run.runID === runID);
    // Extract temp1 and temp2 data from the selected run
    const tempData = runsWithID.map((run) => ({
      time: new Date(run.timestamp).toLocaleTimeString('en-US', { hour12: true, timeZone: 'America/Chicago' }), // Specify timeZone
      value: run.dataframe.speed
    }));
    const speedData = runsWithID.map((run) => ({
      time: new Date(run.timestamp).toLocaleTimeString('en-US', { hour12: true, timeZone: 'America/Chicago' }), // Specify timeZone
      value: run.dataframe.temp
    }));
    
      // Set the temp1 and temp2 data for the line charts
      setSpeedData(speedData);
      setTempData(tempData);
};



  const fetchData = async () => {
    try {
      const response = await fetch("/api/liveData");
      const data = await response.json();

      // Sort the runs by timestamp in increasing order
      data.sort((a: Run, b: Run) => {
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        return dateA.getTime() - dateB.getTime();
      });

      setRuns(data);
    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  const handleToggle = () => {
    setShowAllGauges((prevState) => !prevState);
  };

  // Extracting unique run IDs
  const uniqueRunIDs = Array.from(new Set(runs.map((run) => run.runID)));

  // Extracting the first timestamp for each run
  const firstTimestamps = uniqueRunIDs.map((runID) => {
    const firstRun = runs.find((run) => run.runID === runID);
    return firstRun ? new Date(firstRun.timestamp) : null;
  });

// Month abbreviation mapping
const monthAbbreviations = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

const formattedFirstTimestamps = firstTimestamps.map((timestamp) => {
  if (!timestamp) return ''; // If timestamp is null, return an empty string
  
  // Convert UTC timestamp to Central Daylight Time
  const chicagoTime = new Date(timestamp);
  chicagoTime.toLocaleString('en-US', { timeZone: 'America/Chicago' });

  // Format the timestamp in CDT
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Chicago' // Adjusted to Central Daylight Time
  });
  
  return formatter.format(chicagoTime);
});




  return (
    
    <section>
       {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error fetching data...</p>
      ) : (

      <div className="container-fluid px-4 my-2 bg-black bg-gradient rounded-4 text-light border border-secondary">
        <div className="row justify-content-center">
          <button className="btn btn-purple col-2 my-4 py-2"  onClick={fetchData}>Refresh Data</button>
        </div>

        <div className="row justify-content-center">
          <div className="container mt-4">
            <div className="row justify-content-center">
            <ul className="list-group col-10">
              
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-secondary fw-bold">
                    <span className="col-4">Event Name</span>
                    <span className="col-4">Date</span>
                    <span className="col-2">Select</span>
                  </li>
                  {uniqueRunIDs.map((runID, index) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={runID}>
                    <span className="col-4">Run ID: {runID}</span>
                    <span className="col-4">{formattedFirstTimestamps[index]}</span>
                    <button className="btn btn-purple col-2" onClick={() => fetchSpecificRun(runID)}>
                  Load Run Data
                  </button>
                  </li>
                   ))}
                </ul>
            </div>
          </div>
          <div className="text-center">
            <button className="btn mt-2 px-4 w-100" onClick={handleToggle}>
              <i
                className={`bi text-white icon-size-lg ${
                  showAllGauges ? 'bi-chevron-double-up' : 'bi-chevron-double-down'
                }`}
              ></i>
            </button>
          </div>
        </div>
        {showAllGauges && (
          <>
  <div className="row justify-content-center">
    <div className="col-md-6 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '35vw', minWidth: '17em', minHeight: '20em', width: '33vw', height: '25em' }}>
      <DynamicLineChart title="Speed Data" data={speedData.map((point) => [point.time, point.value])} />
    </div>
    <div className="col-md-6 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '35vw', minWidth: '17em', minHeight: '20em', width: '33vw', height: '25em' }}>
      <DynamicLineChart title="Temp Data" data={tempData.map((point) => [point.time, point.value])} />
    </div>
  </div>


          </>
        )}
      </div>
      )}
    </section>
  );
}
