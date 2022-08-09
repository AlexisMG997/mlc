import "./logTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import { Component } from "react";

const url = 'http://127.0.0.1:8000/api/orderLogs';

class LogTable extends Component {

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

  render () {

    const contain = this.state.data.map(item => {
      const container = {};
    
      container.id = item.id;
      container.date = item.date;
      container.origin = item.origin;
      container.message = item.message;
      container.orderNum = item.OrderNum
    
      return container;
    })

  return (
    <TableContainer component={Paper} className="logTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple logTable">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Origen</TableCell>
            <TableCell className="tableCell">Mensaje</TableCell>
            <TableCell className="tableCell">No. Orden</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        
        
          {contain.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.origin}</TableCell>
              <TableCell className="tableCell">{row.message}</TableCell>
              <TableCell className="tableCell">
                <span className={'status Verificado'}> {row.orderNum} </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
};

export default LogTable;
