import React from "react";
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  datasets: [{
    data: [0, 15, 10, 17, 14, 20, 23],
    fill: false,
    borderColor: "#3f8c7a",
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

const RequestChart = () => {
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

export default RequestChart;