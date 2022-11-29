import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import LogTable from "../../components/logTable/LogTable";
import "./logs.scss";

const Logs = () => {
  return (
    <div className="logs">
      <Sidebar />
      <div className="logsContainer">
        <Navbar />
        
        <LogTable />

      </div>
    </div>
  );
};

export default Logs;
