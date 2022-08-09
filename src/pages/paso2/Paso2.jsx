import "./paso2.scss";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import CircleIcon from '@mui/icons-material/Circle';
import { Component } from "react";
import { Link } from "react-router-dom";

class Paso2 extends Component {

  state = {
    divCont:false
  }
  
  render() {

    var handleChange = e => {
      this.setState({divCont:!this.state.divCont})
    }

    const add = this.state.divCont;

  return (
    <div className="paso2">
      <div className="paso2Container">
        <Navbar />
        <div className="top">
          <h1>Limpieza Actual - Instrucciones</h1>
          <CircleIcon className="dotComplete2"/>
          <CircleIcon className="dotProgress2"/>
          <CircleIcon className="dot"/>
          <CircleIcon className="dot"/>
          <CircleIcon className="dot"/>
        </div>
        <div className="bottom">
          <div>
            <h1 className="title">Revisión de materiales</h1>
            <div className="searcher">
              Material: <input type='text' placeholder="0123456789"></input>
              <button className="verify" onClick={handleChange}>Verificar</button>
              {
                add &&(
                <Link to="/produccion/paso3" className="link">
                SIGUIENTE
                </Link>
              )
              }
            </div>
              <List/>
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default Paso2;
/**
 * IF INPUT = VARIABLE ID
 * THEN ( GET...CLASSNAME() )
 */