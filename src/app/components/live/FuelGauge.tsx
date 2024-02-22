
// BIG REMINDER:
// For this to work i had to:
// Rremove comments from layout file as it was causing JSX DOM errors 
//JSX comments can sometimes lead to unexpected behavior, especially when dealing with
// server-side rendering (SSR) or static site generation (SSG) in frameworks like Next.js.
// Also had to change the import to use dynamic in the page.tsx file this is imported into

import ReactECharts from 'echarts-for-react';
import {useState, useEffect} from 'react';

interface FuelProps {
  value?: number;
}

const FuelGage : React.FC<FuelProps>= ({value = 100 }) => {
    const [option, setOption] = useState({})
 
    useEffect(() => {
   const option={
    title: {
      text: 'Fuel',
      textStyle: {
          color: '#fff'
      },
      left: '30%', // Center the title horizontally 
      top: 10, // Top 20%
  },
    series:[
    // right
    {
        name: 'gauge 4',
        type: 'gauge',
        min: 0,
        max: 100,
        startAngle: 80,
        endAngle: -80,
        splitNumber:4,
        radius: '62%',
        center: ['55%', '50%'],
        axisLine: {
          lineStyle: {
            color: [[1, '#AE96A6']]
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        anchor: {},
        pointer: {
          icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
          width: 10,
          offsetCenter: [0, '-10%'],
          length: '62%',
          itemStyle: {
            color: '#f00',
            shadowColor: 'rgba(255, 0, 0)',
            shadowBlur: 5,
            shadowOffsetY: 3
          }
        },
        detail: {
          backgroundColor: '#9942ff', 
          borderColor: '#fff',
          borderWidth: 2,
          width: '60%',
          lineHeight: 50,
          height: 50,
          borderRadius: 8,
          offsetCenter: [-70, 0],
          valueAnimation: true,
          formatter: function (value:number) {
            return '{value|' + value.toFixed(0) + '}{unit|%}';
          },
          rich: {
            value: {
              fontSize: 30,
              fontWeight: 'bolder',
              color: '#fff'
            },
            unit: {
              fontSize: 10,
              color: '#eee',
              padding: [0, 0, -20, 10]
            }
          }
        },
        progress: {
          show: true,
          width: 10,
          itemStyle: {
            color: '#ab57f7'
          }
        },
        data: [
          {
              value: value,
              color: 'white'
          }
      ]
      },
      {
        name: 'gauge 5',
        type: 'gauge',
        min: 0,
        max: 100,
        startAngle: 80,
        endAngle: -80,
        splitNumber: 4,
        radius: '60%',
        center: ['55%', '50%'],
        axisLine: {
          lineStyle: {
            width: 14,
            color: [
              [0.15, '#f00'],
              [1, 'rgba(255, 0, 0, 0)']
            ]
          }
        },
        splitLine: {
          distance: -10,
          length: 16,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisTick: {
          distance: 0,
          length: -14,
          splitNumber: 2,
          lineStyle: {
            color: '#fff',
            width: 3,
            shadowColor: 'rgba(255, 255, 255)',
            shadowBlur: 10,
            shadowOffsetX: -3
          }
        },
        axisLabel: {
          distance: -45,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: 'Arial',
          color: '#fff',
          formatter: function (value:number) {
            if (value === 0) {
              return 'E';
            }
            if (value === 25) {
              return '1/4';
            }
            if (value === 50) {
              return '1/2';
            }
            if (value === 75) {
              return '3/4';
            }
            if (value === 100) {
              return 'F';
            }
            return value + '';
          }
        },
        progress: {
          show: true,
          width: 5,
          itemStyle: {
            color: '#fff'
          }
        },
        anchor: {
          show: true,
          itemStyle: {},
          offsetCenter: [50,0],
          size: 20,
          icon: 'path://M1.11979167,1.11111112 C1.11979167,0.497461393 1.61725306,0 2.23090279,0 L12.2309028,0 C12.8445525,1.43824153e-08 13.3420139,0.497461403 13.3420139,1.11111112 L13.3420139,10 L15.5642361,10 C16.7915356,10 17.7864583,10.9949228 17.7864583,12.2222222 L17.7864583,16.6666667 C17.7865523,17.28025 18.2839861,17.7776077 18.8975694,17.7776077 C19.5111527,17.7776077 20.0085866,17.28025 20.0086805,16.6666667 L20.0086805,8.88888888 L17.7864583,8.88888888 C17.1728086,8.88888888 16.6753472,8.3914275 16.6753472,7.77777779 L16.6753472,3.79333333 L15.6197917,2.73777777 C15.1859413,2.30392741 15.1859413,1.60051702 15.6197917,1.16666667 L15.6197917,1.16666667 C16.053642,0.732816318 16.7570524,0.732816318 17.1909028,1.16666667 L21.9053472,5.88111112 C22.1140468,6.08922811 22.2312072,6.37193273 22.2309028,6.66666667 L22.2309028,16.6666667 C22.2309028,18.5076158 20.7385186,20 18.8975695,20 C17.0566203,20 15.5642361,18.5076158 15.5642361,16.6666667 L15.5642361,12.2222222 L13.3420139,12.2222222 L13.3420139,17.7777778 L13.3420139,17.7777778 C13.9556636,17.7777778 14.453125,18.2752392 14.453125,18.8888889 L14.453125,18.8888889 C14.453125,19.5025386 13.9556636,20 13.3420139,20 L1.11979165,20 C0.506141934,20 0.00868054688,19.5025386 0.00868054687,18.8888889 L0.00868054687,18.8888889 C0.00868054688,18.2752392 0.506141934,17.7777778 1.11979165,17.7777778 L1.11979167,17.7777778 L1.11979167,1.11111112 Z M3.34201388,2.22222221 L3.34201388,8.88888888 L11.1197917,8.88888888 L11.1197917,2.22222221 L3.34201388,2.22222221 Z'
        },
        pointer: {
          show: false
        },
       
      },
      
    ]
  };
   setOption(option);

},[value]);
    return <ReactECharts option={option} className="h-100 w-100 bg-transparent" />;
}

export default FuelGage;