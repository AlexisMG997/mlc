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

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Friday",
  "Saturday",
];

const ControlPanel = () => {
  const [label2, setLabel2] = useState(0);
  let label = 0;
  const chartRef = useRef();
  const onClick = (event) => {
    var activeBar = getElementAtEvent(chartRef.current, event);
    if (activeBar.length > 0) {
      var clickedDatasetIndex = activeBar[0].datasetIndex;
      var clcikedElementIndex = activeBar[0].index;
      label = data.labels[clcikedElementIndex];
      var value = data.datasets[clickedDatasetIndex].data[clcikedElementIndex];
      setLabel2(label);
    }
  };

  const getDate = () => {
    var newDate = document.getElementById("date").value;
    setLabel2(newDate);
  };
  const [data, setData] = useState({
    datasets: [
      {
        label: "Good Pieces",
        data: [],
        borderColor: "#9DCA9D",
        backgroundColor: "#AFE1AF",
      },
      {
        label: "Bad Pieces",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://127.0.0.1:8000/api/order";
      let dataSet1 = [];
      let dataSet2 = [];
      let labelSet = [];
      await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          const res = data.json();
          console.log("Api data json", res);
          return res;
        })
        .then((res) => {
          console.log("ressss", res);
          for (const val of res) {
            console.log(dataSet1);
            dataSet1.push(val.goodUnits);
            dataSet2.push(val.scrap);
            labelSet.push(val.id);
          }
          setData({
            labels: labelSet,
            datasets: [
              {
                label: "Good Pieces",
                data: dataSet1,
                borderColor: "#9DCA9D",
                backgroundColor: "#AFE1AF",
              },
              {
                label: "Bad Pieces",
                data: dataSet2,
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
    const id = setInterval(() => {
      fetchData();
    }, 5000);

    fetchData();

    return () => clearInterval(id);
  }, []);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

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
        text: "Orders processed on November",
      },
    },
  };
  return (
    <>
      <Navbar />
      <div className="controlPanel flex flex-row h-[66vh] mt-5 ">
        <div className="chart w-5/5 h-full justify-items-center ml-3 mr-3 pb-10 bg-white">
          {console.log("inside" + label2)}
          <Bar
            id="orders"
            ref={chartRef}
            data={data}
            options={options}
            onClick={onClick}
            className={"ml-[5%] mb-2 w-full"}
          />
        </div>
        <div className="stats w-1/5  ml-3 mr-3 h-[30]">
          <SideStatsA key={label2} order={label2} />
        </div>
      </div>
      <div className="controlPanel flex flex-row h-[20vh] mt-5 ">
        <div className="chart w-4/5  ml-3 mr-3 bg-white">
          <StackedChart order={label2} />
        </div>
        <div className="stats w-1/5  ml-3 mr-3 ">
          <SideStatsB key={label2} order={label2} />
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
