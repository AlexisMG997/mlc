import React from "react";
import { useState, useRef, useEffect } from "react";
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
  const param = props;

  const [isBusy, setBusy] = useState(true);
  const [goodUnits, setGoodUnits] = useState();
  const [quantity, setQuantity] = useState();
  const [scrap, setScrap] = useState();
  const [percentageScrap, setPercentageScrap] = useState();

  let u = 0;
  const a = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://127.0.0.1:8000/api/order/" + props.order;
      await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          const ress = data.json();
          return ress;
        })
        .then((ress) => {
          console.log("NEW", ress);
          console.log("A", ress[0].goodUnits, ress[0].initialDate);
          let a = toString(ress[0].goodUnits);
          for (const val in ress) {
            setGoodUnits(ress[0].goodUnits);
            setScrap(ress[0].scrap);
            setPercentageScrap((ress[0].scrap / 100) * 100);
            setQuantity(ress[0].quantity);
          }
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
  }, [props.order]);

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
        borderColor: "#9DCA9D",
        backgroundColor: "#AFE1AF",
      },
      {
        label: "Scrap Pieces",
        data: [scrap],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#ffb1c1",
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
