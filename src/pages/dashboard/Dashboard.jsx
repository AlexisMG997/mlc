import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import ChartScrap from "../../components/chartScrap/ChartScrap";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="pieces" />
          <Widget type="scrap" />
        </div>
        <div className="charts">
          <Chart title="Piezas producidas por estación (Hoy)" aspect={10 / 5} />
        </div>
        <div className="charts">
          <ChartScrap title="Scrap por estación (Hoy)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
