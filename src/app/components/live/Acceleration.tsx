
// BIG REMINDER:
// For this to work i had to:
// Rremove comments from layout file as it was causing JSX DOM errors 
//JSX comments can sometimes lead to unexpected behavior, especially when dealing with
// server-side rendering (SSR) or static site generation (SSG) in frameworks like Next.js.
// Also had to change the import to use dynamic in the page.tsx file this is imported into

import ReactECharts from 'echarts-for-react';
import {useState, useEffect} from 'react';

interface AccelProps {
  value?: number;
}

const Acceleration : React.FC<AccelProps>= ({value }) => {
    const [option, setOption] = useState({})
 
    useEffect(() => {
         
   const option={
    title: {
      text: 'Acceleration',
      textStyle: {
          color: '#fff'
      },
      left: 'center', // Center the title horizontally 
      top: 10, // Top 20%
  },
    series:[
      {
        name: 'gauge 2',
        type: 'gauge',
        min: -2,
        max: 10,
        z: 10,
        startAngle: 160,
        endAngle: -160,
        splitNumber: 6,
        radius: '70%',
        center: ['50%', '50%'],
        axisLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: [
              [1, '#fff'],
            ]
          }
        },
        splitLine: {
          distance: 5,
          length: 15,
          lineStyle: {
            color: 'auto',
            width: 4,
            shadowColor: 'rgba(255, 255, 255, 0.5)',
            shadowBlur: 15,
            shadowOffsetY: -10
          }
        },
        axisTick: {
          distance: 7,
          length: 8,
          splitNumber: 4,
          lineStyle: {
            color: 'auto',
            width: 2,
            shadowColor: 'rgba(255, 255, 255)',
            shadowBlur: 10,
            shadowOffsetY: -10
          }
        },
        axisLabel: {
          distance: 10,
          fontSize: 15,
          fontWeight: 800,
          fontFamily: 'Arial',
          color: '#fff'
        },
        anchor: {},
        pointer: {
          icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
          width: 10,
          offsetCenter: [0, 0],
          length: '60%',
          itemStyle: {
            color: '#f00',
            shadowColor: 'rgba(255, 0, 0)',
            shadowBlur: 5,
            shadowOffsetY: 3
          }
        },
        title: {
          color: '#fff',
          fontSize: 12,
          fontWeight: 800,
          fontFamily: 'Arial',
          offsetCenter: [0, '-30%']
        },
        data: [
          {
            value: value,
            name: 'g units'
          }
        ],
        detail: {
          show: false
        }
      },
    ]
  };
   setOption(option);

},[value]);
    return <ReactECharts option={option} className="h-100 w-100 bg-transparent"/>;
}

export default Acceleration;