import React from 'react';
import { Chart } from "react-google-charts";
// import { Line } from 'react-chartjs-2';


const BarChart = (props) => {

  // const style = '#703593';
  const data = [["Amount", "Month"], ["jan", 5000], ["feb", 25000], ["mar", 6000], ["apr", 20000], ["may", 25000], ["jun", 10000], ["jul", 4000], ["aug", 23000], ["sep", 14000], ["oct", 19000], ["nov", 30000], ["dec", 22000]];

  const options = {
    chartArea: { width: "100%" },
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
    <div className=' md:w-full'>
      
      <Chart
          chartType="Bar"
          data={data}
          width="100%"
          height="300px"
          options={options}
        />
    </div>
  );
};

export default BarChart;
