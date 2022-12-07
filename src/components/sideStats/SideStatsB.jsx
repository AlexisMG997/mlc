import React from "react";
import { useEffect, useState, useRef } from "react";
import "./sideStats.scss";

const SideStatsB = (props) => {
  const [percentageScrap, setPercentageScrap] = useState();

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
            setPercentageScrap(
              (parseFloat(ress[0].scrap / ress[0].quantity) * 100).toFixed(2) +
                " %"
            );
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
  return (
    <>
      <div className="badPiecesCount bg-white flex-col h-[20vh] ml-3 mr-3 ">
        <div className="titleBadPiecesCount text-center flex-row bg-red-500 h-[20%]">
          Bad Pieces %
        </div>
        <div className="textBadPiecesCount flex-row text-center bg-white  h-[80%]">
          <p className="pt-[10%] text-red-500">{percentageScrap}</p>
        </div>
      </div>
    </>
  );
};

export default SideStatsB;
