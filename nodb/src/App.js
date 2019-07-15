
import React, { Component } from "react";
import './App.css';
import Header from "./Components/Header";
import OrderList from "./Components/OrderList";
import Order from "./Components/Order";
import data from "./MenuData";
import Menu from "./Components/Menu";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        MenuData: data,
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
            <Menu menuList={this.state.MenuData}/>
            {this.state.view === "orderView" ? <Order changeView={this.changeView} /> : null }
            {this.state.view === "Order List" ? <OrderList changeView={this.changeView} /> : null }
            {/* {this.state.view === "Ticket List" ? <Ticket changeView={this.changeView} /> : null } */}
            
            </>
         )
    }
}
export default App;
