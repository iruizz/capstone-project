
// BIG REMINDER:
// For this to work i had to:
// Also had to change the import to use dynamic in the page.tsx file this is imported into

import ReactECharts from 'echarts-for-react';
import {useState, useEffect} from 'react';
interface TempGaugeProps {
    value?: number;
    title?: string;
}

const TempGauge: React.FC<TempGaugeProps>= ({value = 0, title = 'Temp' }) => {
    const [option, setOption] = useState({})
 
    useEffect(() => {
        if (value !== undefined && value !== null) {
            const option = {
                title: {
                    text: title,
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
                    radius: '70%',
                    min: 0,
                    max: 100,
                    splitNumber: 10,
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
                      distance: -15,
                      color: '#b800cf',
                      fontSize: 13,
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
                      formatter: `${value.toFixed(1)} °C`,
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
                    max: 100,
                    radius: '70%',
                    itemStyle: {
                      color: '#68109c',
                      shadowColor: 'rgba(99,00,255,0.45)',
                      shadowBlur: 10,
                      shadowOffsetX: 10,
      
                    },
                    progress: {
                      show: true,
                      width: 5
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