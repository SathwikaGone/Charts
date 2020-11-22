import React from "react";
import { Line } from "react-chartjs-2";
import { data } from "./Data";
export default function BarChart() {
  const options = {
    title: {
      display: true,
      text: "Line Chart",
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
      <Line data={data.line} options={options} />
    </div>
  );
}
