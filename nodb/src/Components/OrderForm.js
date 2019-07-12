import React, { Component } from "react";
import axios from "axios";

class OrderForm extends Component {
    constructor(props) {
    super(props);
    this.state = {   
        id:"",                 
        cust: "",
        item: "",
        weight: 0,         
        iscomplete:false,
        };
    }
   
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        }

    handleClick = (id) => {
    axios.put("/api/orderList/"+id,this.state)
         .then(res => {this.setState({ orders: res.data })})
         .catch(error => {
                          console.log(error);
                          this.setState({
                          error: "ERROR"
                          });
                         });
    }

    clickView = (e) => {
    e.preventDefault();
    this.props.changeView("Order List");
    }

   
    render(){
        return (
            <>
            <form class="form" >
            <input
              name="cust"
              placeholder="Enter Name"
              onChange={this.handleChange}
              value={this.state.cust}
            />
            <input
              name="item"
              placeholder="Item"
              onChange={this.handleChange}
              value={this.state.item}
            />
            <input
              name="weight"
              placeholder="Weight"
              onChange={this.handleChange}
              value={this.state.weight}
            />
                       
          <button type="submit" onClick={() => this.handleClick(this.state.id)}>Update</button>
          </form>
          </>
        );
    }
}
          
export default OrderForm;





