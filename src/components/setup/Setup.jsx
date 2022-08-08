import "./setup.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Setup = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/equipment/1");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const machines = [
    {
      idEquipment: 14551,
      equipmentMachine: "Fold Machine",
      Parameters: [
        {
          idParameter: 1,
          parameterName: "Time",
          unitOfMesure: "sec",
          valueMaximum: 200,
          valueMinimum: 150,
        },
        {
          idParameter: 2,
          parameterName: "Velocity",
          unitOfMesure: "mm/sec",
          valueMaximum: 50,
          valueMinimum: 25,
        },
      ],
    },
    {
      idEquipment: 14552,
      equipmentMachine: "Temperature controller",
      Parameters: [
        {
          idParameter: 1,
          parameterName: "Heater",
          unitOfMesure: "Fahrenheit",
          valueMaximum: 40,
          valueMinimum: 15,
        },
      ],
    },
  ];
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      {data.map((dat, index) => (
        <div className="machine" key={index}>
          <div className="machineHeader">
            <h2>{dat.equipmentMachine}</h2>
          </div>
          {dat.parameters.map((parameter, index) => {
            return (
              <div className="parameterTitle" key={index}>
                <h1>{parameter.parameterName}</h1>
                <div className="parameter">
                  <p>
                    Range: {parameter.valueMinimum} - {parameter.valueMaximum}{" "}
                    {parameter.unitOfMeasure}
                    <div className="controls">
                      <input type="text" className="parameter" />
                      <button className="verify">Verificar</button>
                    </div>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Setup;
