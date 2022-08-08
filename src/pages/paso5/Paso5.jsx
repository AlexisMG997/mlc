import "./paso5.scss";
import Navbar from "../../components/navbar/Navbar";
import Resume from "../../components/resume/Resume";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

const Paso5 = () => {
  return (
    <div className="paso2">
      <div className="paso2Container">
        <Navbar />
        <div className="top">
          <h1>Resume</h1>
          <CircleIcon className="dotComplete2" />
          <CircleIcon className="dotComplete" />
          <CircleIcon className="dotComplete" />
          <CircleIcon className="dotProgress2" />
          <CircleIcon className="dot" />
        </div>
        <div className="bottom">
          <div>
            <Resume />
            <div className="link-position">
              <Link to="/produccion/paso3" className="link position">
                FINISH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso5;
