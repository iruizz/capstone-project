'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const DynamicLineChart = dynamic(() => import('@/app/components/datahub/LineChart'), {
  ssr: false,
});
const DynamicDoubleLineChart = dynamic(() => import('./DoubleLineChart'), {
  ssr: false,
});
const DynamicMap = dynamic(() => import('@/app/components/datahub/Map'), {
  ssr: false,
});

interface LineChartDataPoint {
  time: string;
  value: number;
}

export default function GaugeBoard() {
  const [lineChartData, setLineChartData] = useState<LineChartDataPoint[]>([]);
  const [showAllGauges, setShowAllGauges] = useState(false);

  useEffect(() => {
    const dataArray = [];
    let time = new Date('February 17, 2024 19:52:37');
    for (let i = 0; i < 50; i++) {
      const value = Math.round(Math.random() * 300);
      dataArray.push({ time: time.toLocaleTimeString('en-US', { hour12: true }), value });
      time.setSeconds(time.getSeconds() + 1);
    }
    setLineChartData(dataArray);
  }, []);

  const handleToggle = () => {
    setShowAllGauges((prevState) => !prevState);
  };

  return (
    <section>
      <div className="container-fluid px-4 my-2 bg-black bg-gradient rounded-4 text-light border border-secondary">
        <div className="row justify-content-center">
          <div className="container mt-4">
            <div className="row justify-content-center">
            <ul className="list-group col-10">
                  <li className="list-group-item d-flex justify-content-between align-items-center bg-secondary fw-bold">
                    <span className="col-4">Event Name</span>
                    <span className="col-4">Data</span>
                    <span className="col-2">Load</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="col-4">First Test Run</span>
                    <span className="col-4">2024-02-17</span>
                    <button className="btn btn-primary col-2">Load</button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="col-4">Practice Run Around Loras</span>
                    <span className="col-4">2024-02-19</span>
                    <button className="btn btn-primary col-2">Load</button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="col-4">SAE Buggy Competition</span>
                    <span className="col-4">2024-02-25</span>
                    <button className="btn btn-primary col-2">Load</button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="col-4">Cross-Country Test</span>
                    <span className="col-4">2024-03-03</span>
                    <button className="btn btn-primary col-2">Load</button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="col-4">Final Tune-Up</span>
                    <span className="col-4">2024-03-10</span>
                    <button className="btn btn-primary col-2">Load</button>
                  </li>
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
            <div className="row justify-content-center my-5">
              <div className="col-md-6 text-center border border-secondary rounded-4 mx-2 mb-4" style={{ maxWidth: '60vw', minWidth: '22em', minHeight: '27em', width: '30vw', height: '51em' }}>
                <DynamicDoubleLineChart data={lineChartData.map((point) => [point.time, point.value])} />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 text-center border border-secondary rounded-4 mb-3 mx-2" style={{ minWidth: '22em', minHeight: '17em', width:'100%', height:"25em" }}>
                    <DynamicLineChart data={lineChartData.map((point) => [point.time, point.value])} />
                  </div>
                  <div className="col-md-12 text-center mx-2 mb-4" style={{ minWidth: '22em', minHeight: '17em', width:'100%', height:"25em"  }}>
                    <DynamicMap/>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
