
// BIG REMINDER:
// For this to work i had to:
// Rremove comments from layout file as it was causing JSX DOM errors 
//JSX comments can sometimes lead to unexpected behavior, especially when dealing with
// server-side rendering (SSR) or static site generation (SSG) in frameworks like Next.js.
// Also had to change the import to use dynamic in the page.tsx file this is imported into

import ReactECharts from 'echarts-for-react';
import {useState, useEffect} from 'react';
interface SpeedometerProps {
    value?: number;
    width?: string;
    height?: string;
}

const Speedometer: React.FC<SpeedometerProps>= ({value = 0 }) => {
    const [option, setOption] = useState({})
 
    useEffect(() => {
        if (value !== undefined && value !== null) {
        const speedometerOptions = {
          title: {
            text: 'Fuel Flow Rate',
            textStyle: {
                color: '#fff'
            },
            left: 'center', // Center the title horizontally 
            top: 10, // Top 20%
        },
          series: [
            {
              type: 'gauge',
              center: ['50%', '55%'],
              startAngle: 3600,
              endAngle: 0,
              splitNumber: 7,
              itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
              },
              pointer: {
                show: false
              },
              axisLine: {
                roundCap: true,
                lineStyle: {
                  width: 10,
                  color: [[1, '#58D9F9']],
                  shadowColor: 'rgba(0,138,255,0.45)',
                  shadowBlur: 10,
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
                },
                
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
               show:false
              },
              title: {
                show: false
              },
              detail: {
                backgroundColor: '#58D9F9', 
                borderColor: '#fff',
                borderWidth: 2,
                width: '100%',
                lineHeight: 50,
                height: 50,
                borderRadius: 8,
                offsetCenter: [0, 0],
                valueAnimation: true,
                formatter: function (value:number) {
                  return '{value|' + value.toFixed(1) + '}{unit|liters/h}';
                },
                rich: {
                  value: {
                    fontSize: 30,
                    fontWeight: 'bolder',
                    color: '#fff'
                  },
                  unit: {
                    fontSize: 15,
                    color: '#eee',
                    padding: [0, 0, -20, 10]
                  }
                }
              },
              data: [
                {
                  value: value
                }
              ]
            }
          ]
        };
        setOption(speedometerOptions);
    }
    }, [value]);

    return <ReactECharts option={option} className="h-100 w-100 bg-transparent" />;
}

export default Speedometer;