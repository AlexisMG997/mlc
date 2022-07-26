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

const data = [
  { name: "Estación A", pieces: 500 },
  { name: "Estación B", pieces: 300 },
  { name: "Estación C", pieces: 100 },
  { name: "Estación D", pieces: 714 },
  { name: "Estación E", pieces: 205 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
        width={500}
        height={300}
        data={data}
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

export default Chart;
