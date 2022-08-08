import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../components/widget/Widget";
import WidgetScrap from "../../components/widgetScrap/WidgetScrap"; 
import Chart from "../../components/chart/Chart";
import ChartScrap from "../../components/chartScrap/ChartScrap";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className="dashboardContainer">

          <div className="producedPieces">
            <div className="widgets">
              <Widget/>
            </div>
            <div className="charts">
              <Chart />
            </div>
          </div>

          <div className="scrapPieces">
            <div className="widgets">
            <WidgetScrap/>
            </div>
            <div className="charts">
              <ChartScrap />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
