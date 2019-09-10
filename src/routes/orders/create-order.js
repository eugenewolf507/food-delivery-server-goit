const fs = require("fs");
const path = require("path");

const createOrder = (request, response) => {
  const usersSrc = path.join(__dirname, "../../", "db", "all-products.json");
  const order = request.body;

  let resultedProductsInOrder = [];
  const productsFromOrder = order.products;

  fs.readFile(usersSrc, (error, data) => {
    const productsList = JSON.parse(data);

    //============= Check if all product from order is in Product List,
    //============= if not all - include only exist products
    productsFromOrder.forEach(productFromOrder => {
      productsList.forEach(productFromList => {
        if (productFromOrder === productFromList.id)
          resultedProductsInOrder = [
            ...resultedProductsInOrder,
            productFromOrder
          ];
      });
    });
    //=============
    const orderId = Date.now();
    const orderData = {
      ...order,
      products: resultedProductsInOrder,
      id: orderId
    };

    const orderSrc = path.join(
      __dirname,
      "../../",
      "db/users/orders",
      orderId + ".json"
    );

    fs.writeFile(orderSrc, JSON.stringify(orderData), error => {
      if (error) throw error;
    });
    response.set("Content-Type", "application/json");
    response.status(200);
    response.json({ status: "success", order: orderData });
  });
};

module.exports = createOrder;
