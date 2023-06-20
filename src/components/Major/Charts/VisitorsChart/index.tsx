import React from "react";
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  datasets: [{
    data: [20, 25, 18, 25, 10, 15, 0],
    fill: false,
    borderColor: "#b6534f",
    borderWidth: 2,
    pointStyle: false as any,
    lineTension: 0.4
  }],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        display: false
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false
      },
      border: {
        display: false,
      },
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip:{
      enabled: false,
    }
  }
}

const VisitorsChart = () => {
  return (
    <div>
      <Line
        data={data} 
        width={70}
        height={55}
        options={options}
      />
    </div>
  );
}

export default VisitorsChart;
