import React from 'react';
import { Chart } from "react-google-charts";
// import { Line } from 'react-chartjs-2';


const BarChart = (props) => {

  const style = '#703593';
  const data = [["Amount", "Month", { role: 'style' }], ["jan", 5000, style], ["feb", 25000, style], ["mar", 6000, style], ["apr", 20000, style], ["may", 25000, style], ["jun", 10000, style], ["jul", 4000, style], ["aug", 23000, style], ["sep", 14000, style], ["oct", 19000, style], ["nov", 30000, style], ["dec", 22000, style]];

  const options = {
    chartArea: { width: "50%" },
    isStacked: false,
    hAxis: {
      title: "amount",
      minValue: 0,
    },
    vAxis: {
      title: "Month",
    },
    colors: ['#1B1A1A'],
    
  };
  return (
    <div>
      
      <Chart
          chartType="Bar"
          data={data}
          width="100%"
          height="300px"
          options={options}
          legendToggle
        />
    </div>
  );
};

export default BarChart;
