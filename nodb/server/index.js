const express = require("express");
const OrderController = require("./Controller/OrderController");
const app = express();

app.use(express.json());

app.get("/api/orderList", OrderController.getOrderList);    //get list of orders
app.post("/api/orderList", OrderController.addOrder);       //add new order
app.put("/api/orderList/:id", OrderController.updateOrder); //change an order with given id
app.delete("/api/orderList/:id", OrderController.deleteOrder); //delete given order with given id


const PORT = 5060;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));








