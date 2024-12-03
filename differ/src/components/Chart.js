import { AgCharts } from 'ag-charts-react';

const Chart = ({ data }) => {
  const series = [
    { type: 'bar', xKey: 'line', yKey: 'left', yName: 'removed', fill: 'red' },
    { type: 'bar', xKey: 'line', yKey: 'right', yName: 'added', fill: 'green' },
  ];

  return (
    <div
      style={{ height: '100%', width: '50%', margin: 30 }}
    >
      <AgCharts
        options={{
          data: data,
          series: series,
          legend: { enabled: false},
          axes: [
            {
              type: 'number',
              position: 'left',
              label: {
                format: ',.0f' // This formats numbers as integers
              },
              title: {
                text: 'chars'
              }
            },
            {
              type: 'number',
              position: 'bottom',
              label: {
                format: ',.0f' // This formats x-axis numbers as integers
              },
              title: {
                text: 'line#'
              }
            }
          ]
        }}
      />
    </div>
  );
}

export default Chart;
