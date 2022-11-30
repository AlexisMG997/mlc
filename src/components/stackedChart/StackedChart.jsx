import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedChart = (props) => {
  let goodUnits = 0;
  let scrapUnits = 0;
  const param = props;
  switch (param.order) {
    case 22323332:
      goodUnits = 350;
      scrapUnits = 250;
      break;
    case 22323333:
      goodUnits = 150;
      scrapUnits = 450;
      break;
    case 22323334:
      goodUnits = 300;
      scrapUnits = 300;
      break;
    default:
      break;
  }
  const options = {
    indexAxis: "y",
    layout: {
      padding: {
        left: 0,
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "Overview order " + param.order,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [""];

  const data = {
    labels,
    datasets: [
      {
        label: "Good Pieces",
        data: [goodUnits],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Scrap Pieces",
        data: [scrapUnits],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <div className=" w-full h-[18vh] mb-6">
      <Bar options={options} data={data} />
    </div>
  );
};

export default StackedChart;
