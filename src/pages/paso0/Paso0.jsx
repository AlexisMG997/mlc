import "./paso0.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Orden from "../../components/Orden/Orden"

const Paso0 = () => {
  return (
    <div className="Paso0">
      <Sidebar/>
      <div className="Paso0Container">
        <Navbar/>
        <Orden/>
      </div>
    </div>
  )
}

export default Paso0