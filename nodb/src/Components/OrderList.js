import React, { Component } from "react";
import Order from "./Order";
import axios from "axios";



class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {   
         orders: [],
         error: ""
    };
  }
//functions
componentDidMount() {
                    axios
                      .get("/api/orderList")
                      .then(res => {this.setState({ orders: res.data })
                                    })
                      .catch(error => {
                                      console.log(error);
                                      this.setState({error: "ERROR"
                                                    });
                                      });
                    }

updateOrders = newOrders => {
  this.setState({orders: newOrders});
}
clickView =  (e) => {
  e.preventDefault();
  this.props.changeView("orderView");
}


  render() {
    return (
        <>
          <ul>
            <Order
              updateOrders={this.updateOrders}
            />
            {this.state.orders.map(order => (
                <h1>{order.cust}</h1>
            ))}
          </ul>
          <button onClick={this.clickView}>View Order Sheet</button>
        </>
    )
  }
}
  export default OrderList;

