import { Component } from "react";
import axios from 'axios'

export class goodProduct extends Component {
    state = {
      data:[]
    }
    
    getRequest = () => {
      axios.get(url)
      .then(response => { 
        console.log(response); 
        this.setState({data: response.data})
        const goodOrder = this.state.data.map(item => {
          const container = {};
        
          container.name = 'Orden #' + item.id;
          container.pieces = item.goodUnits
        
          return container;
        })
        console.log(goodOrder)
      } )
    }
    
    
    componentDidMount(){
      this.getRequest();
    }

    render()
    {
        return (goodOrder)
    }
}

export default goodProduct