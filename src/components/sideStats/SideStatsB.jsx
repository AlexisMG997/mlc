import React from "react";

const SideStatsB = () => {
  return (
    <>
      <div className="badPiecesCount bg-white flex-col h-[20vh] ml-3 mr-3 border-4">
        <div className="titleBadPiecesCount flex-row bg-red-500 h-[20%]">
          Bad Pieces %
        </div>
        <div className="textBadPiecesCount flex-row bg-red-200 h-[80%]">
          Percentage
        </div>
      </div>
    </>
  );
};

export default SideStatsB;
