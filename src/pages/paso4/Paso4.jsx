import "./paso4.scss";
import Navbar from "../../components/navbar/Navbar";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import Process from "../../components/process/Process";

const Paso4 = () => {
  return (
    <div className="paso2">
      <div className="paso2Container">
        <Navbar />
        <div className="top">
          <h1>Procedimiento</h1>
          <CircleIcon className="dotComplete2" />
          <CircleIcon className="dotComplete" />
          <CircleIcon className="dotComplete" />
          <CircleIcon className="dotProgress2" />
          <CircleIcon className="dot" />
        </div>
        <div className="bottom">
          <div>
            <Process />
            <div id="linkPosition" className="link-position">
              <Link to="/produccion/paso5" className="link position">
                SIGUIENTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso4;
