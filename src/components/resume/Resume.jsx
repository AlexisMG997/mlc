import "./resume.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Resume = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/order/1");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // const resumes = [
  //   {
  //     quantity: 600,
  //     goodPieces: 555,
  //     scrap: 45,
  //   },
  // ];
  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      {data.map((dat, index) => (
        <div className="container" key={index}>
          <div className="resumeScrap">
            <div className="titleScrap">
              <h2>Scrap</h2>
            </div>
            <div className="scrapQuantity">
              <p>
                {dat.scrap}
                {console.log(dat.scrap)}
              </p>
            </div>
          </div>
          <div className="resumeInitialPieces">
            <div className="titleInitialPieces">
              <h2>Piezas iniciales</h2>
            </div>
            <div className="initialPiecesQuantity">
              <p>{dat.quantity}</p>
            </div>
          </div>
          <div className="resumeGoodPieces">
            <div className="titleGoodPieces">
              <h2>Piezas buenas</h2>
            </div>
            <div className="goodPiecesQuantity">
              <p>{dat.goodUnits}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
