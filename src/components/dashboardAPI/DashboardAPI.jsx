import { useEffect, useState } from "react";
import { borderColor } from "@mui/system";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const DashboardAPI = (props) => {
//   return <h1 className="text-3xl font-bold underline">{props.text}</h1>;
// };

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Friday",
  "Saturday",
];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Good Pieces",
//       data: [1, 2, 3, 4, 5],
//       borderColor: "rgb(53,162,235)",
//       backgroundColor: "rgba(53,162,235,0.5)",
//     },
//     {
//       label: "Bad Pieces",
//       data: [1, 2, 3, 4, 5],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255,99,132,0.5)",
//     },
//   ],
// };

const DashboardAPI = () => {
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Good Pieces",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(53,162,235)",
        backgroundColor: "rgba(53,162,235,0.5)",
      },
      {
        label: "Bad Pieces",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      let dataSet1 = [];
      let dataSet2 = [];
      let labelSet = [];
      await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("ressss", res);
          res.map((re, index) => {
            dataSet1.push(re.id);
            dataSet2.push(re.postId);
            labelSet.push(re.name);
          });
          setData({
            labels: labelSet,
            datasets: [
              {
                label: "Good Pieces",
                data: dataSet1,
                borderColor: "rgb(53,162,235)",
                backgroundColor: "rgba(53,162,235,0.5)",
              },
              {
                label: "Bad Pieces",
                data: dataSet2,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255,99,132,0.5)",
              },
            ],
          });
          console.log("arrDate", dataSet1, dataSet2);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  });
  return <Bar data={data} options={options} />;
};

export default DashboardAPI;
