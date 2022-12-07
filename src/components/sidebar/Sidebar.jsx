import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MLC</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
            <span>Dashboard</span>
            </Link>
          </li>
          
          <p className="title">SERVICE</p>
          <Link to="/logs" style={{ textDecoration: "none" }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          </Link>
          <Link to="/produccion/paso1" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Producción</span>
          </li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
