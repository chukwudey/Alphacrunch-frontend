import React from 'react';
import { Line } from 'react-chartjs-2';


const BarChart = (props) => {
  return (
    <div>
      <Line
        data={{
          labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
          datasets: [
            {
              label: 'Scores Graph',
              data: props.data,
              backgroundColor: [
                'rgba(138,201,38,1)',
                'rgba(138,201,38,1)',
                'rgba(138,201,38,1)',
                'rgba(138,201,38,1)',
                'rgba(138,201,38,1)',
                'rgba(138,201,38,1)',
              ],
              borderColor: [
                'rgba(52,168,83,1)',
                'rgba(52,168,83,1)',
                'rgba(52,168,83,1)',
                'rgba(52,168,83,1)',
                'rgba(52,168,83,1)',
                'rgba(52,168,83,1)',
              ],
              borderWidth: 3,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
