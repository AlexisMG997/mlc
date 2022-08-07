import "./paso3.scss";
import Navbar from "../../components/navbar/Navbar";
import Setup from "../../components/setup/Setup";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

const Paso3 = () => {
  return (
    <div className="paso2">
      <div className="paso2Container">
        <Navbar />
        <div className="top">
          <h1>Set Up - Equipos</h1>
          <CircleIcon className="dotComplete2" />
          <CircleIcon className="dotComplete" />
          <CircleIcon className="dotProgress2" />
          <CircleIcon className="dot" />
          <CircleIcon className="dot" />
        </div>
        <div className="bottom">
          <div>
            <h1 className="title">Set Up - Equipment/Tooling</h1>
            <Setup />
            <div className="link-position">
              <Link to="/produccion/paso3" className="link position">
                SIGUIENTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso3;
