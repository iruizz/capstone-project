
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
            text: 'Speed',
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
              startAngle: 220,
              endAngle: -40,
              min: 0,
              max: 70,
              splitNumber: 7,
              itemStyle: {
                color: '#58D9F9',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
              },
              progress: {
                show: true,
                roundCap: true,
                width: 10
              },
              pointer: {
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: '65%',
                width: 16,
                offsetCenter: [0, '5%']
              },
              axisLine: {
                roundCap: true,
                lineStyle: {
                  width: 10
                }
              },
              axisTick: {
                splitNumber: 5,
                lineStyle: {
                  width: 2,
                  color: '#999',
                  shadowColor: 'rgba(255, 255, 255)',
            shadowBlur: 10,
            shadowOffsetY: -3
                }
              },
              splitLine: {
                length: 12,
                lineStyle: {
                  width: 3,
                  color: '#999'
                }
              },
              axisLabel: {
                distance: 15,
                color: '#999',
                fontSize: 15
              },
              title: {
                show: false
              },
              detail: {
                backgroundColor: '#fff',
                borderColor: '#999',
                borderWidth: 2,
                width: '60%',
                lineHeight: 30,
                height: 30,
                borderRadius: 8,
                offsetCenter: [0, '80%'],
                valueAnimation: true,
                formatter: function (value:number) {
                  return '{value|' + value.toFixed(0) + '}{unit|km/h}';
                },
                rich: {
                  value: {
                    fontSize: 30,
                    fontWeight: 'bolder',
                    color: '#777'
                  },
                  unit: {
                    fontSize: 10,
                    color: '#999',
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