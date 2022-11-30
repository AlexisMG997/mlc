import React from "react";
import SideStatsA from "../../components/sideStats/SideStatsA";
import SideStatsB from "../../components/sideStats/SideStatsB";
import Navbar from "../../components/navbar/Navbar";
import DashboardAPI from "../../components/dashboardAPI/DashboardAPI";
import "./controlPanel.scss";
import StackedChart from "../../components/stackedChart/StackedChart";
import { useEffect, useState, useRef } from "react";
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
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { formControlClasses } from "@mui/material";

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

let label = "0";

const ControlPanel = () => {
  const chartRef = useRef();
  const onClick = (event) => {
    var activeBar = getElementAtEvent(chartRef.current, event);
    if (activeBar.length > 0) {
      var clickedDatasetIndex = activeBar[0].datasetIndex;
      var clcikedElementIndex = activeBar[0].index;
      label = data.labels[clcikedElementIndex];
      var value = data.datasets[clickedDatasetIndex].data[clcikedElementIndex];
      // alert("Clicked: " + label + " - " + value);
    }
  };
  console.log(label);
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
          /* console.log("Api data", data);*/
          const res = data.json();
          return res;
        })
        .then((res) => {
          /*console.log("ressss", res);*/
          res.map((re, index) => {
            dataSet1.push(re.id);
            dataSet2.push(re.postId);
            labelSet.push(re.name);
          });
          setData({
            labels: [22323332, 22323333, 22323334],
            datasets: [
              {
                label: "Good Pieces",
                data: [2, 3, 4],
                borderColor: "rgb(53,162,235)",
                backgroundColor: "rgba(53,162,235,0.5)",
              },
              {
                label: "Bad Pieces",
                data: [2, 3, 4],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255,99,132,0.5)",
              },
            ],
          });
          /*console.log("arrDate", dataSet1, dataSet2);*/
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  });
  return (
    <>
      <Navbar />
      <div className="controlPanel flex flex-row h-[66vh] mt-5 ">
        <div className="chart w-4/5 justify-items-center ml-3 mr-3 bg-white">
          <Bar
            id="orders"
            ref={chartRef}
            data={data}
            options={options}
            onClick={onClick}
          />
        </div>
        <div className="stats w-1/5  ml-3 mr-3 h-[30]">
          <SideStatsA order={label} />
        </div>
      </div>
      <div className="controlPanel flex flex-row h-[20vh] mt-5 ">
        <div className="chart w-4/5  ml-3 mr-3 bg-white">
          <StackedChart order={label} />
        </div>
        <div className="stats w-1/5  ml-3 mr-3 ">
          <SideStatsB />
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
