import React from "react";
import { Pie } from "react-chartjs-2";
import { data } from "./Data";
export default function BarChart() {
  //using data of bar chart

  const options = {
    title: {
      display: true,
      text: "Pie Chart",
    },
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "top",
    },
  };
  return (
    <div style={{ width: "550px", height: "500px" }}>
      <Pie data={data.bar} options={options} />
    </div>
  );
}
