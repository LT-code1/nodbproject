import React, { Component } from "react";
// import Order from "./Order";
import axios from "axios";
import OrderForm from "./OrderForm";



class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            editting: false,
            error: ""
        };
    }
    //functions
    //editReset = () => {this.setState({editting : false})};
    editOrders = (data) => { this.setState({ orders : data })
                             this.setState({editting : false}) };
  

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

    // updateOrders = id => {
    //   e.preventDefault();
    //   this.props.changeView("Order List");  ///perhaps change view to orderlist and keep id?

      
    //   axios.put("/api/orderList/"+id)
    //         .then(res =>{
    //           this.setState({ orders: res.data})
    //         })
    //         .catch(error => {
    //           console.log(error);
    //           this.setState({
    //               error: "ERROR"
    //           });
    //       });
    // }

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

    toggleEditting = () => {
      this.state.editting ? this.setState({editting: false}) : this.setState({editting: true});
    }


    render() {
        return (
            <>
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
export default OrderList;

