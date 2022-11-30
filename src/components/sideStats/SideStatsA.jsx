import React from "react";

const SideStatsA = (props) => {
  return (
    <>
      <div className="date flex-col h-[20vh] mb-6 ml-3   mr-3 border-4">
        <div className="titleGoodPiecesCount flex-row bg-green-500 h-[20%]">
          Good Pieces
        </div>
        <div className="textGoodPiecesCount flex-row bg-green-200 h-[80%]">
          {props.order}
        </div>
      </div>
      <div className="goodPiecesCount bg-white flex-col h-[20vh] mb-6 ml-3 mr-3 border-4 ">
        <div className="titleGoodPiecesCount flex-row bg-green-500 h-[20%]">
          Good Pieces %
        </div>
        <div className="textGoodPiecesCount flex-row bg-green-200 h-[80%]">
          Percentage
        </div>
      </div>
      <div className="badPiecesCount bg-white flex-col h-[20vh] ml-3 mr-3 border-4">
        <div className="titleBadPiecesCount flex-row bg-red-500 h-[20%]">
          Bad Pieces
        </div>
        <div className="textBadPiecesCount flex-row bg-red-200 h-[80%]">
          Quantity
        </div>
      </div>
    </>
  );
};

export default SideStatsA;
