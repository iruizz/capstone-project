import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import IndicatorCard from './IndicatorCard';
import { pusherClient } from '@/app/lib/pusher';

const DynamicSpeedometer = dynamic(() => import('@/app/components/live/Speedometer'), {
  ssr: false,
});
const DynamicFuelGauge = dynamic(() => import('@/app/components/live/FuelGauge'), {
  ssr: false,
});
const DynamicAcceleration = dynamic(() => import('@/app/components/live/Acceleration'), {
  ssr: false,
});
const DynamicTempGauge = dynamic(() => import('@/app/components/live/TempGauge'), {
  ssr: false,
});
const DynamicLineChart = dynamic(() => import('@/app/components/datahub/LineChart'), {
  ssr: false,
});
const DynamicMap = dynamic(() => import('@/app/components/datahub/Map'), {
  ssr:false,
});

interface LineChartDataPoint {
  time: string;
  value: number;
}

type CardToggles = {
  status: boolean;
  fuel: boolean;
  temp1: boolean;
  temp2: boolean;
};

export default function GaugeBoard() {
  const [speedValue, setSpeedValue] = useState(0);
  const [tempValue, setTempValue] = useState(0);
  const [fuelValue, setFuelValue] = useState(100);
  const [accelValue, setAccelValue] = useState(-2);
  const [lineChartData, setLineChartData] = useState<LineChartDataPoint[]>([]);
  const [showAllGauges, setShowAllGauges] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [cardToggles, setCardToggles] = useState<CardToggles>({
    status: false,
    fuel: false,
    temp1: false,
    temp2: false,
  });

  // Handles incoming live data and updates state for each gauge using pusherClient
  useEffect(() => {
    pusherClient.subscribe('live-data');
    pusherClient.bind('new-data', (data: any) => {
      if ('speed' in data) {
        setSpeedValue(data.speed);
      }
      if ('temp' in data) {
        setTempValue(data.temp);
  
        // Update the current date
        const updatedDate = new Date();
        setCurrentDate(updatedDate);
  
        // Update lineChartData based on the new date
        const newDataPoint = {
          time: updatedDate.toLocaleTimeString('en-US', { hour12: true }),
          value: data.temp,
        };
  
        setLineChartData((prevData) => {
          const updatedData = [...prevData, newDataPoint].slice(-60);
          return updatedData;
        });
      }
      if ('fuel' in data) {
        setFuelValue(data.fuel);
      }
      if ('accel' in data) {
        setAccelValue(data.accel);
      }
      // can add more conditions to handle additional values
    });
  
    return () => {
      pusherClient.unsubscribe('live-data');
      pusherClient.unbind('new-data');
    };
  }, []);


  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (showAllGauges) {
      intervalId = setInterval(() => {
        {/* FOR TESTING WITHOUT PUSHER */}
        setSpeedValue((prevValue) => (prevValue < 70 ? prevValue + 5 : 0));
        setTempValue((prevValue) => (prevValue < 100 ? prevValue + 2 : 0));
        setFuelValue((prevValue) => (prevValue > 0 ? prevValue - 2 : 100));
        setAccelValue((prevValue) => (prevValue < 10 ? prevValue + 1 : -2));
        
        
        const randomValue = Math.round(Math.random() * 300);
  
        // Update the current date
        const updatedDate = new Date();
        
        setLineChartData((prevData) => {
          const newDataPoint = {
            time: updatedDate.toLocaleTimeString('en-US', { hour12: true }),
            value: randomValue,
          };
  
          const updatedData = [...prevData, newDataPoint].slice(-60);
          return updatedData;
        });
      }, 1000);
    }
  
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [showAllGauges]);

  const handleToggle = (cardName: keyof CardToggles) => {
    setCardToggles((prevState) => ({
      ...prevState,
      [cardName]: !prevState[cardName],
    }));
  };

  return (
    <section>
      <div className="container-fluid px-4 my-2 bg-black bg-gradient rounded-4 text-light border border-secondary">
        <div className="row justify-content-center">
          <div className="text-center">
            <button className="btn mt-2 px-4 w-100" onClick={() => setShowAllGauges(!showAllGauges)}>
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
          <div className="row justify-content-center border-top border-bottom">
          <IndicatorCard
          category={"Status"}
          title={cardToggles.status ? "ON" : "OFF"}
          iconName={cardToggles.status ? "toggle-on" : "toggle-off"}
          footer={"Arduino Connection"}
          bgColor={'bg-secondary'}
          iconColor={"black"}
          onClick={() => handleToggle("status")}
        />
        <IndicatorCard
          category={"Fuel Level"}
          title={"---"}
          iconName={"fuel-pump"}
          footer={"Low Fuel Warning"} 
          bgColor={'bg-secondary'}
          iconColor={(fuelValue < 25 && fuelValue > 0) ? "danger" : "black"}
        />
        <IndicatorCard
          category={"Temp."}
          title={"---"}
          iconName={tempValue >= 82 ? "thermometer-high" : "thermometer-low"}
          footer={"CVT Temp Warning"}
          bgColor={'bg-secondary'}
          iconColor={tempValue >= 82 ? "danger" : "black"}
        />
        <IndicatorCard
          category={"Temp."}
          title={"---"}
          iconName={tempValue >= 82 ? "thermometer-high" : "thermometer-low"}
          footer={"Brake Temp Warning"}
          bgColor={'bg-secondary'}
          iconColor={tempValue >= 82? "danger" : "black"}
        />
        </div>
            <div className="row justify-content-center mt-4">
              <div className="col-md-4 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '23vw', minWidth: '17em', minHeight: '17em', width:'22vw', height: '20em' }}>
                <DynamicAcceleration value={accelValue} />
              </div>
              <div className="col-md-4 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '23vw', minWidth: '17em', minHeight: '17em', width:'22vw', height: '20em' }}>
                <DynamicSpeedometer value={speedValue} />
              </div>
              <div className="col-md-4 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '23vw', minWidth: '17em', minHeight: '17em', width:'22vw', height: '20em' }}>
                <DynamicFuelGauge value={fuelValue} />
              </div>
        
              <div className="col-md-6 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '23vw', minWidth: '17em', minHeight: '20em', width:'22vw', height: '25em' }}>
                <DynamicTempGauge value={tempValue} />
              </div>
              <div className="col-md-6 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '60vw', minWidth: '17em', minHeight: '20em', width: '45vw', height: '25em' }}>
                <DynamicLineChart data={lineChartData.map((point) => [point.time, point.value])} />
              </div>
              <div className="col-md-4 text-center mx-2 mb-4" style={{ maxWidth: '41.5vw', minWidth: '25em', minHeight: '20em', width:'35.5vw', height: '25em' }}>
              <DynamicMap/>
              </div>
              <div className="col-md-4 mx-2 mb-4 text-glow" style={{ maxWidth: '41.5vw', minWidth: '25em', minHeight: '20em', width:'32vw', height: '25em' }}>
                <div className="h-50 border border-secondary rounded mb-1 px-2">
                  <h5 className="text-center mt-2 mb-5">Fastest Lap</h5>
                  <h2 className="text-center text-info">1 minutes, 13 seconds, 279 milliseconds</h2>
                </div>
                <div className="h-50 border border-secondary rounded px-2">
                  <h5 className="text-center mt-2 mb-5">Last Lap</h5>
                  <h2 className="text-center text-info">1 minutes, 17 seconds, 258 milliseconds</h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
