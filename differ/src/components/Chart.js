import { AgCharts } from 'ag-charts-react';

const Chart = ({ data }) => {
  const series = [
    { type: 'bar', xKey: 'line', yKey: 'removed', yName: 'Removed', fill: 'red' },
    { type: 'bar', xKey: 'line', yKey: 'added', yName: 'Added', fill: 'green' },
  ];

  const options={
    data: data,
    series: series,
    axes: [
      {
        type: 'number',
        position: 'left',
        title: { text: 'chars' },
      },
      {
        type: 'number',
        position: 'bottom',
        label: { format: ',.0f', },
        title: { text: 'index', },
      }
    ]
  };

  return (
    <AgCharts options={options}/>
  );
}

export default Chart;
