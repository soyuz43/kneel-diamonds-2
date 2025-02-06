export const Orders = async () => {
  const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style");
  const orders = await response.json();

  console.log("Fetched Orders:", orders); 


  let ordersHTML = orders.map((order) => {
    console.log("Order Data:", order); 


    if (order.metal && order.size && order.style) {
      console.log("Metal Data:", order.metal);
      console.log("Size Data:", order.size);
      console.log("Style Data:", order.style);

      const metalPrice = Number(order.metal.price);
      const sizePrice = Number(order.size.price);
      const stylePrice = Number(order.style.price);

      console.log("Parsed Prices:", { metalPrice, sizePrice, stylePrice }); 
      if (isNaN(metalPrice) || isNaN(sizePrice) || isNaN(stylePrice)) {
        return `<li>Order #${order.id} - Error: Invalid price data</li>`;
      }

      const orderPrice = metalPrice + sizePrice + stylePrice;
      return `<li>Order #${order.id} - Total: $${orderPrice.toFixed(2)}</li>`;
    } else {
      return `<li>Order #${order.id} - Error: Missing metal, size, or style</li>`;
    }
  });

  return ordersHTML.join("");
};
