import "./paso2.scss";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import CircleIcon from "@mui/icons-material/Circle";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Paso2 = () => {
  var resulter = 0;
  const inputRef = useRef(null);

  function handleClick() {
    //console.log(inputRef.current.value);
    resulter = document.getElementById(inputRef.current.value);
    //console.log(inputRef.current.value)
    //console.log(inputRef.current.value);
    /* console.log('status Pendiente '+ inputRef.current.value)*/

    if (inputRef.current.value.length > 8) {
      alert("La ID debe ser menor a 7 caracteres");
    } else {
      if ((resulter = document.getElementById(inputRef.current.value))) {
        document.getElementById(inputRef.current.value).className =
          "status Verificado";
        document.getElementById(inputRef.current.value).innerHTML =
          "Verificado";
        console.log("si existe");
        enableNextStep();
      } else {
        alert("Error, la ID del producto no existe");
      }
    }
  }

  function enableNextStep() {
    if (document.getElementsByClassName("status Pendiente").length === 0) {
      document.getElementById("linker").style.display = "inherit";
      console.log("done");
    } else {
      console.log(document.getElementsByClassName("status Pendiente").length);
    }
  }

  return (
    <div className="paso2">
      <div className="paso2Container">
        <Navbar />
        <div className="top">
          <h1>Limpieza Actual - Instrucciones</h1>
          <CircleIcon className="dotComplete2" />
          <CircleIcon className="dotProgress2" />
          <CircleIcon className="dot" />
          <CircleIcon className="dot" />
          <CircleIcon className="dot" />
        </div>
        <div className="bottom">
          <div>
            <h1 className="title">Revisión de materiales</h1>
            <div className="searcher">
              Material:{" "}
              <input
                ref={inputRef}
                type="number"
                placeholder="0123456789"
                className="searcher"
                min="0"
              ></input>
              <button className="verify" onClick={handleClick}>
                Verificar
              </button>
            </div>
            <List />

            <Link to="/produccion/paso3" className="link" id="linker">
              SIGUIENTE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso2;
/**
 * IF INPUT = VARIABLE ID
 * THEN ( GET...CLASSNAME() )
 */
