'use client';
import ReactEcharts from 'echarts-for-react';
const LineChart = () => {
  const option = {
    grid: {
      left: '40',
      bottom: '25',
    },
    tooltip: { show: true },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260, 500, 450, 100, 200, 300, 280],
        type: 'line',
        smooth: true,
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default LineChart;
