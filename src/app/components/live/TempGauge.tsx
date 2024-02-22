
// BIG REMINDER:
// For this to work i had to:
// Rremove comments from layout file as it was causing JSX DOM errors 
//JSX comments can sometimes lead to unexpected behavior, especially when dealing with
// server-side rendering (SSR) or static site generation (SSG) in frameworks like Next.js.
// Also had to change the import to use dynamic in the page.tsx file this is imported into

import ReactECharts from 'echarts-for-react';
import {useState, useEffect} from 'react';
interface TempGaugeProps {
    value?: number;
    width?: string;
    height?: string;
}

const TempGauge: React.FC<TempGaugeProps>= ({value = 0 }) => {
    const [option, setOption] = useState({})
 
    useEffect(() => {
        if (value !== undefined && value !== null) {
            
            const option = {
                title: {
                    text: 'CVT Belt Temp.',
                    left: 'center', // Center the title horizontally
                    top: 10,     // Adjust the top position if needed
                    textStyle: {
                      color: '#FFF', // Title text color
                      fontSize: 20,  // Title font size
                    },
                  },
                series: [
                  {
                    type: 'gauge',
                    center: ['50%', '70%'],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 60,
                    splitNumber: 6,
                    itemStyle: {
                      color: '#b00fd4',
                      shadowColor: 'rgba(99,00,255,0.45)',
                      shadowBlur: 10,
                      shadowOffsetX: 10,
                    },
                    progress: {
                      show: true,
                      width: 15
                    },
                    pointer: {
                      show: false
                    },
                    axisLine: {
                      lineStyle: {
                        width: 15
                      }
                    },
                    axisTick: {
                      distance: -25,
                      splitNumber: 6,
                      lineStyle: {
                        width: 2,
                        color: 'white',
                        shadowColor: 'rgba(255, 255, 255)',
                        shadowBlur: 10,
                        shadowOffsetY: -3
                      }
                    },
                    splitLine: {
                      distance: -30,
                      length: 8,
                      lineStyle: {
                        width: 3,
                        color: 'white'
                      }
                    },
                    axisLabel: {
                      distance: -12,
                      color: '#b800cf',
                      fontSize: 15,
                    },
                    anchor: {
                      show: false
                    },
                    title: {
                      show: false
                    },
                    detail: {
                      valueAnimation: true,
                      width: '60%',
                      lineHeight: 40,
                      borderRadius: 4,
                      offsetCenter: [0, '-15%'],
                      fontSize: 30,
                      fontWeight: 'bolder',
                      formatter: '{value} °C',
                      color: 'inherit'
                    },
                    data: [
                      {
                        value: value
                      }
                    ]
                  },
              
                  {
                    type: 'gauge',
                    center: ['50%', '70%'],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 60,
                    itemStyle: {
                      color: '#68109c',
                      shadowColor: 'rgba(99,00,255,0.45)',
                      shadowBlur: 10,
                      shadowOffsetX: 10,
      
                    },
                    progress: {
                      show: true,
                      width: 8
                    },
              
                    pointer: {
                      show: false
                    },
                    axisLine: {
                      show: false
                    },
                    axisTick: {
                      show: false
                    },
                    splitLine: {
                      show: false
                    },
                    axisLabel: {
                      show: false
                    },
                    detail: {
                      show: false
                    },
                    data: [
                      {
                        value: value
                      }
                    ]
                  }
                ]
              };
        setOption(option);
    }
    }, [value]);

    return <ReactECharts option={option} className="h-100 w-100 bg-transparent" />;
}

export default TempGauge;