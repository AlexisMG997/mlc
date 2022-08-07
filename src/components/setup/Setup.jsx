import "./setup.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Setup = () => {
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
      {machines.map((machine, index) => (
        <div className="machine" key={index}>
          <div className="machineHeader">
            <h2>{machine.equipmentMachine}</h2>
          </div>
          {machine.Parameters.map((parameter, index) => {
            return (
              <div className="parameterTitle" key={index}>
                <h1>{parameter.parameterName}</h1>
                <div className="parameter">
                  <p>
                    Range: {parameter.valueMinimum} - {parameter.valueMaximum}
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
