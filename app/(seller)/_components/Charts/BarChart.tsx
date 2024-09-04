'use client';
import ReactEcharts from 'echarts-for-react';

const BarChart = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
      show: true,
    },
    grid: {
      left: '40',
      bottom: '25',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130, 120, 250, 140, 130, 300],
        type: 'bar',
        barMaxWidth: '40',
        itemStyle: {
          //   color: '#7AAECA',
          barBorderRadius: [5],
        },
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default BarChart;
