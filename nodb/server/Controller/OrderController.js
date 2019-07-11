
let ID=0;    
                         //initialize orders to 0

const orderList = [                 //array of order objects which have properties empty to start
                    {
                    id: 0,
                    cust: "sdf",
                    item: "beef",
                    weight:34,     
                    iscomplete: false
                    }
                ];
  
  const getOrderList = (req, res) => {
    res.json(orderList);
  };

  const addOrder = (req, res) => {
    ID++;  //increment order#
    const { cust, item, weight, iscomplete} = req.body;
    if ( !cust || !item || !weight) {
      return res.status(417).json("All fields are required");
    }
    orderList.push(
                    {                
                        id: ID,
                        cust: cust,
                        item: item,
                        weight: weight,
                        iscomplete: iscomplete
                    }
                );
    res.json(orderList);
  };
  
  const updateOrder = (req, res) => {
    const { id } = req.params;                //get order number to update from URL
    const { cust, item, weight, iscomplete} = req.body; //get details of new body for change
    if ( !cust || !item || !weight) {
      return res.status(417).json("All fields are required");
    }
    const index = orderList.findIndex(order => order.id === +id);   //find the element within orderlist that has same id typecast url string id
    orderList[index].cust = cust;                                  // overwrites req.body values on top of orderList[].property
    orderList[index].item = item;                                  // 
    orderList[index].weight = weight;                              // 
    orderList[index].iscomplete = iscomplete;                      // 
    res.json(orderList);
  };
  
const deleteOrder = (req,res) => {
    const { id } = req.params;                //get order number to update from URL
    const index = orderList.findIndex(order => order.id === +id);   //find the element within orderlist that has same id typecast url string id
    orderList.splice(index,1);
    res.json(orderList);
};


  module.exports = {
    getOrderList,
    addOrder,
    updateOrder,
    deleteOrder
  };