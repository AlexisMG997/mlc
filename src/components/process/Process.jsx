import React, { useEffect, useState } from "react";
import "./process.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const Process = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/order/1");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // const endPointOrder = [
  //   {
  //     initialQuantity: 10,
  //     goodPieces: 0,
  //     scrapPieces: 1,
  //   },
  // ];

  const [goodPieces, setGoodPieces] = useState(0);

  const [scrapPieces, setScrapPieces] = useState(0);

  function blockFunction() {
    if (
      parseInt(goodPieces) + parseInt(scrapPieces) ===
      data.map((dat) => dat.quantity)
    ) {
      console.log(goodPieces);
      var buttonScrap = document.getElementById("incrementScrap");
      var buttonGoodPiece = document.getElementById("incrementGoodPiece");
      buttonScrap.setAttribute("disabled", "true");
      buttonGoodPiece.setAttribute("disabled", "true");
    }
  }
  // const [goodPiece, setGoodPiece] = useState(1);
  // const [scrapPiece, setScrapPiece] = useState(0);

  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div className="container">
        <div className="processIncrement">
          <div className="operationTitle">
            <h2>Good Piece</h2>
          </div>
          <div className="incrementOperation">
            <button
              id="incrementGoodPiece"
              className="incrementGoodPiece"
              onClick={() => setGoodPieces(parseInt(goodPieces) + 1)}
              {...blockFunction()}
            >
              <CheckIcon fontSize="large" />
            </button>
            <p className="operationPiece">{goodPieces}</p>
          </div>
        </div>
        <div className="processDecrement">
          <div className="operationTitle">
            <h2>Scrap</h2>
          </div>
          <div className="incrementOperation">
            <button
              id="incrementScrap"
              className="incrementScrap"
              onClick={() => setScrapPieces(parseInt(scrapPieces) + 1)}
            >
              <CloseIcon fontSize="large" />
            </button>
            <p className="operationPiece">{scrapPieces}</p>
          </div>
        </div>
        <div className="processedPiece">
          <p>
            {parseInt(goodPieces) + parseInt(scrapPieces)} -
            {data.map((dat) => {
              return dat.quantity;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Process;
