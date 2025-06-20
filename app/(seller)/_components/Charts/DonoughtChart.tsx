import ReactEcharts from 'echarts-for-react';

const DonoughtChart = () => {
  const option = {
    tooltip: {
      // trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'left',
      orient: 'vertical',
    },
    series: [
      {
        left: '20%',
        bottom: '20%',
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        // avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          // { value: 484, name: 'Union Ads' },
          // { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };

  return <ReactEcharts option={option} />;
};

export default DonoughtChart;
