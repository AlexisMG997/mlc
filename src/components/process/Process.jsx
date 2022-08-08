import React, { useState } from "react";
import "./process.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const Process = () => {
  const endPointOrder = [
    {
      initialQuantity: 10,
      goodPieces: 0,
      scrapPieces: 1,
    },
  ];

  const [goodPiece, setGoodPiece] = useState(
    endPointOrder.map((endPointGoodPiece) => {
      return endPointGoodPiece.goodPieces;
    })
  );
  const [scrapPiece, setScrapPiece] = useState(
    endPointOrder.map((endPointScrapPiece) => {
      return endPointScrapPiece.scrapPieces;
    })
  );

  // const [goodPiece, setGoodPiece] = useState(1);
  // const [scrapPiece, setScrapPiece] = useState(0);

  return (
    <>
      <div className="container">
        <div className="processIncrement">
          <div className="operationTitle">
            <h2>Good Piece</h2>
          </div>
          <div className="incrementOperation">
            <button
              className="incrementGoodPiece"
              onClick={() => setGoodPiece(parseInt(goodPiece) + 3)}
            >
              <CheckIcon />
            </button>
            <p className="operationPiece">{goodPiece}</p>
          </div>
        </div>
        <div className="processDecrement">
          <div className="operationTitle">
            <h2>Scrap</h2>
          </div>
          <div className="incrementOperation">
            <button
              className="incrementScrap"
              onClick={() => setScrapPiece(parseInt(scrapPiece) + 1)}
            >
              <CloseIcon />
            </button>
            <p className="operationPiece">{scrapPiece}</p>
          </div>
        </div>
        <div className="processedPiece">
          <p>
            {parseInt(goodPiece) + parseInt(scrapPiece)} -
            {endPointOrder.map((endPointOrd) => {
              return endPointOrd.initialQuantity;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Process;
