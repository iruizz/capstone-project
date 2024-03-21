import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { pusherClient } from '@/app/lib/pusher';

const DynamicTempGauge = dynamic(() => import('@/app/components/live/TempGauge'), {
  ssr: false,
});
const DynamicMap = dynamic(() => import('@/app/components/live/Map'), {
  ssr:false,
});
const DynamicFlow = dynamic(() => import('@/app/components/live/Flow'), {
  ssr: false,
});

interface MapProps {
  lat: number;
  lng: number;
}

interface TempProps{
  temp: number;
  ambientTemp: number;
}

const startCoord: MapProps = { lat: 42.5029, lng: -90.6811 };

const initialTemp: TempProps = { temp: 0, ambientTemp: 0 };

export default function GaugeBoard() {
  const [temp1Value, setTemp1Value] = useState<TempProps>(initialTemp);
  const [temp2Value, setTemp2Value] =  useState<TempProps>(initialTemp);
  const [temp3Value, setTemp3Value] =  useState<TempProps>(initialTemp);
  const [flowRate, setFlowRate] = useState(0);
  const [coordinate, setCoordinate] = useState<MapProps>(startCoord);
  const [value, setValue] = useState(0);
 
  // Handles incoming live data and updates state for each gauge using pusherClient
  useEffect(() => {
    pusherClient.subscribe('demo-data');
    pusherClient.bind('new-data', (data: any) => {
      if ('temp1' in data) {
        setTemp1Value(data.temp1);
      }
      if ('temp2' in data) {
        setTemp2Value(data.temp2);
      }
      if ('temp3' in data) {
        setTemp3Value(data.temp3);
      }
      if ('flow' in data) {
        setFlowRate(data.flow);
      }
      if ('coordinate' in data) {
        setCoordinate(data.coordinate);
      }
      if('value' in data){
        setValue(data.value); 
      }
      // can add more conditions to handle additional values
    });
  
    return () => {
      pusherClient.unsubscribe('demo-data');
      pusherClient.unbind('new-data');
    };
  }, []);

  return (
    <section>
    <div className="container-fluid px-4 pb-4 my-2 bg-black bg-gradient rounded-4 text-light border border-secondary">
          <div className="row justify-content-center mt-4">
            <div className="col-md-4 border border-secondary rounded-4 mx-2 my-5" style={{ maxWidth: '23vw', minWidth: '17em', minHeight: '17em', width:'22vw', height: '20em' }}>
              <DynamicTempGauge value={temp1Value.temp} title={'CVT Belt Temp.'}/>
              <p className="mb-0">Raw Values</p>
              <p  className="mb-0">Temp: {temp1Value.temp}</p>
              <p>Ambient Temp: {temp1Value.ambientTemp}</p>
            </div>
            <div className="col-md-4 border border-secondary rounded-4 mx-2 my-5" style={{ maxWidth: '23vw', minWidth: '17em', minHeight: '17em', width:'22vw', height: '20em' }}>
            <DynamicTempGauge value={temp2Value.temp} title={'Brake Temp.'}/>
            <p className="mb-0">Raw Values</p>
              <p className="mb-0">Temp: {temp2Value.temp}</p>
              <p>Ambient Temp: {temp2Value.ambientTemp}</p>
            </div>
            <div className="col-md-4 border border-secondary rounded-4 mx-2 my-5" style={{ maxWidth: '23vw', minWidth: '17em', minHeight: '17em', width:'22vw', height: '20em' }}>
            <DynamicTempGauge value={temp3Value.temp} title={'Brake Temp.'} />
            <p className="mb-0">Raw Values</p>
              <p className="mb-0">Temp: {temp3Value.temp}</p>
              <p>Ambient Temp: {temp3Value.ambientTemp}</p>
            </div>
            <div className="col-md-4 mx-2 my-5" style={{ maxWidth: '41.5vw', minWidth: '25em', minHeight: '20em', width:'35.5vw', height: '25em' }}>
            <DynamicMap coordinate={coordinate}/>
            <p className="mb-0">Raw Coordinates</p>
            <span>lat: {coordinate.lat} lng: {coordinate.lng}</span>
            </div>
            <div className="col-md-4 mx-2 my-5 border border-secondary rounded-4" style={{ maxWidth: '41.5vw', minWidth: '25em', minHeight: '20em', width:'32vw', height: '25em' }}>
              <DynamicFlow value={value}/>
              <span>Raw Value: {value}</span>
            </div>
          </div>
    </div>
  </section>
  );
}
