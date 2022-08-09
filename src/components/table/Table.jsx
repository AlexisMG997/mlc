import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import { Component } from "react";
import { Link } from "react-router-dom";

const url = 'http://127.0.0.1:8000/api/material';
//<span className={`status ${row.status}`} id={`${row.status}`}>{row.status}</span>

class List extends Component {


  
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
    
      container.id = item.id_material;
      container.product = item.name;
      container.quantity = item.pieces;
      container.status = 'Pendiente';
    
      return container;
    })

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Material</TableCell>
            <TableCell className="tableCell">Piezas</TableCell>
            <TableCell className="tableCell">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        
        
          {contain.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.quantity}</TableCell>
              <TableCell className="tableCell">
                <input value={row.id} type="checkbox" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
};

export default List;
