import { FC} from 'react';
import ReactECharts from 'echarts-for-react';

interface LineChartProps {
  data: (string | number)[][];
}

const DoubleLineChart: FC<LineChartProps> = ({ data }) => {
  const formattedData: [string, number][] = data.map(([date, value]) => [String(date), Number(value)]);
  const timeList = data.map((item) => item[0]);

  const option = {
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
      },
      {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: timeList.length - 1
      }
    ],
    title: [
      {
        left: 'center',
        text: 'Front Brake Temperature',
        textStyle: {
          color: '#fff'
      },
      },
      {
        top: '55%',
        left: 'center',
        text: 'Rear Brake Temperature',
        textStyle: {
          color: '#fff'
      },
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [
      {
        data: timeList
      },
      {
        data: timeList,
        gridIndex: 1
      }
    ],
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: [0],
        start: 0,
        end: 20,
        top: '45%'
      },
      {
        type: 'slider',
        xAxisIndex: [1],
        start: 0,
        end: 20,
        top: '93%'
      }
    ],
    yAxis: [
      {},
      {
        gridIndex: 1
      }
    ],
    grid: [
      {
        bottom: '60%',
        top: '10%'
      },
      {
        top: '60%'
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: formattedData
      },
      {
        type: 'line',
        showSymbol: false,
        data: formattedData,
        xAxisIndex: 1,
        yAxisIndex: 1
      }
    ]
  };
  
  
  return <ReactECharts option={option} className="h-100 w-100 bg-transparent" />;
};

export default DoubleLineChart;
