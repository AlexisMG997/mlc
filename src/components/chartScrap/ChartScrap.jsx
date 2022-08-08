import "./chart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import axios from "axios";
import { Component } from "react";

const url = 'http://127.0.0.1:8000/api/order';

class Chart extends Component {

  state = {
    data:[]
  }
  
  getRequest = () => {
    axios.get(url)
    .then(response => { 
      console.log(response); 
      this.setState({data: response.data})
    } )
  }
  
  componentDidMount(){
    this.getRequest();
  }

  render()
  {
  return (
    <div className="chart">
      <div className="title">Scrap por orden</div>
      <ResponsiveContainer width="100%" aspect={5 / 1}>
        <BarChart
        width={500}
        height={300}
        data={this.state.data.map(item => {
          const container = {};
        
          container.name = 'Orden #' + item.id;
          container.pieces = item.scrap
        
          return container;
        })}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pieces" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};
}

export default Chart;
