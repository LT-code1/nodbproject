
import React, { Component } from "react";
import './App.css';
import Header from "./Components/Header";
import OrderList from "./Components/OrderList";
import Order from "./Components/Order";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        view: "orderView"
      }
    }

    changeView = newView => {
        this.setState({ view: newView });
      }

render(){
        return (
            <>
            <Header />
            
            {this.state.view === "orderView" ? <Order changeView={this.changeView} />
            : <OrderList changeView={this.changeView} />}
            
            
            </>
         )
    }
}
export default App;
