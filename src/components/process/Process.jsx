import React, { useEffect, useState } from "react";
import "./process.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { Link } from "react-router-dom";

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

  function incrementPieces() {
    if (
      parseInt(goodPieces) + parseInt(scrapPieces) + 1 ==
      data.map((dat) => dat.quantity)
    ) {
      console.log(goodPieces);
      setGoodPieces(parseInt(goodPieces) + 1);
      var buttonScrap = document.getElementById("incrementScrap");
      var buttonGoodPiece = document.getElementById("incrementGoodPiece");
      var buttonPut = document.getElementById("piecesPut");
      buttonScrap.setAttribute("disabled", "true");
      buttonScrap.style.backgroundColor = "#d3d3d3";
      buttonScrap.style.pointerEvents = "none";
      buttonGoodPiece.setAttribute("disabled", "true");
      buttonGoodPiece.style.backgroundColor = "#d3d3d3";
      buttonGoodPiece.style.pointerEvents = "none";
      buttonPut.style.visibility = "visible";
    } else {
      setGoodPieces(parseInt(goodPieces) + 1);
    }
  }

  function incrementScrap() {
    if (
      parseInt(goodPieces) + parseInt(scrapPieces) + 1 ==
      data.map((dat) => parseInt(dat.quantity))
    ) {
      console.log(scrapPieces);
      setScrapPieces(parseInt(scrapPieces) + 1);
      var buttonScrap = document.getElementById("incrementScrap");
      var buttonGoodPiece = document.getElementById("incrementGoodPiece");
      var buttonPut = document.getElementById("piecesPut");
      buttonScrap.setAttribute("disabled", "true");
      buttonScrap.style.backgroundColor = "#d3d3d3";
      buttonScrap.style.pointerEvents = "none";
      buttonGoodPiece.setAttribute("disabled", "true");
      buttonGoodPiece.style.backgroundColor = "#d3d3d3";
      buttonGoodPiece.style.pointerEvents = "none";
      buttonPut.style.visibility = "visible";
    } else {
      console.log(data.map((dat) => parseInt(dat.quantity)));
      console.log(parseInt(goodPieces) + parseInt(scrapPieces));
      setScrapPieces(parseInt(scrapPieces) + 1);
    }
  }
  function updateQuantities() {
    axios
      .put("http://localhost:8000/api/order/1?", {
        goodUnits: parseInt(goodPieces),

        scrap: parseInt(scrapPieces),
      })
      .then((response) => {
        setData(response.data);
      });
    window.location.href = "/produccion/paso5";
  }

  // function blockFunction() {
  //   if (
  //     parseInt(goodPieces) + parseInt(scrapPieces) ===
  //     data.map((dat) => parseInt(dat.quantity))
  //   ) {
  //     console.log(goodPieces);
  //     var buttonScrap = document.getElementById("incrementScrap");
  //     var buttonGoodPiece = document.getElementById("incrementGoodPiece");
  //     var buttonPut = document.getElementById("piecesPut");
  //     buttonScrap.setAttribute("disabled", "true");
  //     buttonGoodPiece.setAttribute("disabled", "true");

  //   }
  // }
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
              onClick={incrementPieces}
            >
              <CheckIcon disabled="true" fontSize="large" />
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
              onClick={incrementScrap}
            >
              <CloseIcon disabled="true" fontSize="large" />
            </button>
            <p className="operationPiece">{scrapPieces}</p>
          </div>
        </div>
        <div className="processedPiece">
          <>
            <h2>Piezas Producidas</h2>
          </>
          <p>
            {parseInt(goodPieces) + parseInt(scrapPieces)} -
            {data.map((dat) => {
              return dat.quantity;
            })}
          </p>
          <button
            id="piecesPut"
            className="piecesPut"
            onClick={updateQuantities}
          >
            SIGUIENTE
          </button>
        </div>
      </div>
    </>
  );
};

export default Process;
