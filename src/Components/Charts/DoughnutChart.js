import React from "react";
import Doughnut from "react-chartjs-2";
import { data } from "./Data";
export default function DoughnutChart() {
  //using data of bar chart
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
    legend: {
      display: true,
      position: "top",
    },
    maintainAspectRatio: false,
  };
  return (
    <div>
      <Doughnut data={data.bar} options={options} />
    </div>
  );
}
