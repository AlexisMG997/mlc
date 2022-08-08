import "./orden.scss";
import { Link } from "react-router-dom";

const Orden = () => {
  return (
    <div className="Orden">
      <div className="OrdenTitle">
        Número de orden de producción
        <input type='text' placeholder="0000000000" className="OrdenText"></input>
        <Link to="/produccion/paso1" className="link">
          CONTINUAR
        </Link>
      </div>

    </div>
  );
};

export default Orden;
