import "./paso1.scss";

import Navbar from "../../components/navbar/Navbar";
import CircleIcon from '@mui/icons-material/Circle';
import axios from "axios";
import { Link } from "react-router-dom";
import { Component } from "react";

const url = 'http://127.0.0.1:8000/api/station/1';

class Paso1 extends Component {

    state = {
      data:[],
      divCont:false
    }
    
    getRequest = () => {
      axios.get(url)
      .then(response => { 
        console.log(response); 
        this.setState({data: response.data})
        console.log(this.state.data)
      } )
    }
    
    componentDidMount(){
      this.getRequest();
    }

    render(){
      var handleChange = e => {
        this.setState({divCont:!this.state.divCont})
      }

      const add = this.state.divCont;
  return (
    <div className="paso1">

      <div className="paso1Container">
        <Navbar />

          <div className="top">

          <>
          {this.state.data.map((dat, index) => {
              return dat.instruction.map((inst, index) => {
                return (<h1> {inst.tittle}  </h1>)
              })
            }
             )}
          </>

        <div className="dots">   
          <CircleIcon className="dotProgress"/>
          <CircleIcon className="dot"/>
          <CircleIcon className="dot"/>
          <CircleIcon className="dot"/>
          <CircleIcon className="dot"/>
          </div> 
        </div>

        <div className="bottom">
          <div className="left">          

            Verificar que la estacion este limpia y se encuentre lista para iniciar  con la orden
            <div className="container">
              <input type='checkbox' className="verify-step" onClick={handleChange}></input>
              
              {this.state.data.map((dat, index) => {
              return dat.instruction.map((inst, index) => {
                return ( <>{inst.description} </> )
              })
            }
             )}

            </div>
              {
                add &&(<Link to="/produccion/paso2" className="link">
                SIGUIENTE
              </Link>)
              }
            <div className="container"></div>
          </div>
        </div>

      </div>
    </div>
    );
  };
}

export default Paso1;
