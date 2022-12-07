import React from "react";
import { useEffect, useState, useRef } from "react";
import "./sideStats.scss";

const SideStatsA = (props) => {
  const [isBusy, setBusy] = useState(true);
  const [goodUnits, setGoodUnits] = useState();
  const [percentageGoodUnits, setPercentageGoodUnits] = useState();
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
            setGoodUnits(ress[0].goodUnits + " / ");
            setPercentageGoodUnits(
              (parseFloat(ress[0].goodUnits / ress[0].quantity) * 100).toFixed(
                2
              ) + " %"
            );
            setScrap(ress[0].scrap + " / ");
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
  return (
    <>
      <div className="date flex-col h-[20vh] mb-6 ml-3 mr-3 ">
        <div className="titleGoodPiecesCount flex-row text-center bg-green-500 h-[20%]">
          Good Pieces
        </div>
        <div className="textGoodPiecesCount text-center flex-row bg-white h-[80%]">
          <p className="valueText pt-[10%] text-green-500">
            {goodUnits}
            {quantity}
          </p>
        </div>
      </div>
      <div className="goodPiecesCount bg-white flex-col h-[20vh] text-center mb-5 ml-3 mr-3">
        <div className="titleGoodPiecesCount flex-row bg-green-500 h-[20%]">
          Good Pieces %
        </div>
        <div className="textGoodPiecesCount flex-row bg-white h-[80%]">
          <p className="valueText pt-[10%] text-green-500">
            {percentageGoodUnits}
          </p>
        </div>
      </div>
      <div className="badPiecesCount bg-white flex-col h-[20vh] text-center ml-3 mr-3">
        <div className="titleBadPiecesCount flex-row bg-red-500 h-[20%] ">
          Bad Pieces
        </div>
        <div className="textBadPiecesCount flex-row bg-white h-[80%] ">
          <p className="valueText pt-[10%] text-red-500">
            {scrap}
            {quantity}
          </p>
        </div>
      </div>
    </>
  );
};

export default SideStatsA;
