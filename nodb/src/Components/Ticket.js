import React, { Component } from "react";
import axios from "axios";


class Ticket extends Component {
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

    clickView = (e) => {
        e.preventDefault();
        this.props.changeView("orderView");
    }
    
    render() {
        return (
            <>
                {/* <nav className="nav" >
                <button onClick={this.clickView}>View Order Sheet</button>
                </nav> */}
                <ul>
                    {this.state.orders.map(order => (
                       <li key={order.id}>
                            <h1>Order#{order.id} {order.cust} ordered {order.weight} lbs. of {order.item}</h1>
                            <button onClick={() => this.deleteOrder(order.id)}>Delete Order</button>
                            <button onClick={this.toggleEditting}>Update Order</button>
                            {/* {
                              this.state.editting ? <OrderForm id = {order.id}        //pass props to OrderForm
                                                               cust = {order.cust}
                                                               weight = {order.weight}
                                                               item = {order.item}/> : null
                            } */} 
                            {this.state.editting ? <OrderForm pOrders={this.editOrders} passedid={order.id}/>:null} 
                        </li>                    
                    ))}
                </ul>
                <nav className="nav" >
                <button onClick={this.clickView}>View Order Sheet</button>
                </nav>
            </>
        )
    }

}
export default Ticket;

