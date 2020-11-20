import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const data = {
    labels: ["English", "Chinese", "Hindi", "Spanish", "French"],
    datasets: [
      {
        label: "most widely spoken languages",
        data: [1132, 1117, 615, 534, 280],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

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
      <Bar data={data} options={options} width={70} height={20} />
    </div>
  );
}
