import React, { Component } from "react";
import axios from "axios";


 class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {   
                id:"",                 
                cust: "",
                item: "",
                weight: 0,         
                iscomplete:false,
                };
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(e) {
                            this.setState({ [e.target.name]: e.target.value });
                            }
            handleClick = (e) => {
                e.preventDefault();
                axios.post("/api/orderList/",this.state).then(res => {
                                                                    console.log(res.data); //array of objects
                                                                    this.props.updateOrders(res.data);
                                                                     })
                              };
            clickView =  (e) => {
                e.preventDefault();
                this.props.changeView("Order List");
            }

  render(){
            return (
                
                <form >
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

              <button type="submit" onClick={this.handleClick}>Submit</button>
              </form>
              <button onClick={this.clickView}>View Order List</button>
            );
        }
}
          
 export default Order;
  
