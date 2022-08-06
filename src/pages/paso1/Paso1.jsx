import "./paso1.scss";

import Navbar from "../../components/navbar/Navbar";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

const Paso1 = () => {
  return (
    <div className="paso1">
      <div className="paso1Container">
        <Navbar />
        <div className="top">
          <h1>Limpieza Actual - Instrucciones</h1>
          <CircleIcon className="dotProgress" />
          <CircleIcon className="dot" />
          <CircleIcon className="dot" />
          <CircleIcon className="dot" />
          <CircleIcon className="dot" />
        </div>

        <div className="bottom">
          <div className="left">
            Verificar que la estacion este limpia y se encuentre lista para
            iniciar con la orden
            <div className="container">
              <input type="checkbox" className="verify-step"></input>Realizar
              los pasos que dicta el procedimiento de limpieza.
            </div>
            <div className="link-position">
              <Link to="/produccion/paso3" className="link position">
                SIGUIENTE
              </Link>
            </div>
            <div className="container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso1;
