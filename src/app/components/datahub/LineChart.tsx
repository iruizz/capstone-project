import { FC} from 'react';
import ReactECharts from 'echarts-for-react';

interface LineChartProps {
  data: (string | number)[][];
}

const LineChart: FC<LineChartProps> = ({ data }) => {
  const formattedData: [string, number][] = data.map(([date, value]) => [String(date), Number(value)]);
  const timeList = data.map((item) => item[0]);

  const option = {
    visualMap: [
      {
        show: false,
        smooth: true,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 60,
        inRange: {
          color: [
            'rgba(0, 255, 255, 1)',  // Cyan
          ],          
        },
      },
    ],
    title: [
      {
        left: 'center',
        text: 'CVT Belt Temperature',
        top:10,
        textStyle: {
          color: '#fff'
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        data: timeList,
      },
    ],
    yAxis: [{}],
    dataZoom: [
      {
        type: 'slider',
      },
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: formattedData,
        lineStyle: {
            color: 'rgba(0, 255, 255, 1)',
            width: 3,
            shadowColor: 'rgba(0, 255, 255, 0.5)', // Set the shadow color
            shadowBlur: 10, // Set the shadow blur radius
        },
      },
    ],
  };

  return <ReactECharts option={option} className="h-100 w-100 bg-transparent"/>;
};

export default LineChart;
