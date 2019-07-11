import React, { Component } from "react";
// import Order from "./Order";
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
            .then(res => {
                this.setState({ orders: res.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "ERROR"
                });
            });
    }

    updateOrders = newOrders => {           //not used currently
        this.setState({ orders: newOrders });
    }
    clickView = (e) => {
        e.preventDefault();
        this.props.changeView("orderView");
    }

    deleteOrder = id => {
    
        axios.delete("/api/orderList/"+id)
            .then(res => {
                this.setState({ orders: res.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: "ERROR"
                });
            });
    }


    render() {
        return (
            <>
                <ul>
                    {this.state.orders.map(order => (
                        <>
                            <h1>Order#{order.id} {order.cust} ordered {order.weight} lbs. of {order.item}</h1>

                            <button onClick={() => this.deleteOrder(order.id)}>Delete Order</button>
                        </>
                    ))}
                </ul>
                <button onClick={this.clickView}>View Order Sheet</button>
            </>
        )
    }

}
export default OrderList;

