import "./paso2.scss";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import CircleIcon from '@mui/icons-material/Circle';

const Paso2 = () => {
  return (
    <div className="paso2">
      <div className="paso2Container">
        <Navbar />
        <div className="top">
          <h1>Limpieza Actual - Instrucciones</h1>
          <CircleIcon className="dotComplete"/>
          <CircleIcon className="dotProgress"/>
          <CircleIcon className="dot"/>
          <CircleIcon className="dot"/>
          <CircleIcon className="dot"/>
        </div>
        <div className="bottom">
          <div>
            <h1 className="title">Revisión de materiales</h1>
            <div className="searcher">
              Material: <input type='text' placeholder="0123456789"></input>
              <button className="verify">Verificar</button>
            </div>
              <List/>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso2;
