import React from "react";
import { Bar } from "react-chartjs-2";
import { data } from "./Data";

export default function BarChart() {
  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 1400,
            stepSize: 200,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  return (
    <div style={{ width: "550px", height: "500px" }}>
      <Bar data={data.bar} options={options} />
    </div>
  );
}
