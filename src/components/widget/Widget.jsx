import "./widget.scss";
import axios from 'axios';
import { Component } from "react";

const url = 'http://127.0.0.1:8000/api/GoodUnitsTotal';
class Widget extends Component {

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

      render(){
        return (
          <div className="widget">
            <div className="left">
              <span className="title">PIEZAS PRODUCIDAS DEL PLAN DE PRODUCCIÓN</span>
              <span className="counter">
              {
                  this.state.data.map(item => {  
                    return item.goodUnitsTotal
                })


                }
              </span>
            </div>
            <div className="right">

            </div>
          </div>
        );
      };
    }

export default Widget;
