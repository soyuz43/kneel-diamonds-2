// Orders.js

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders");
    const orders = await fetchResponse.json();
  
    let ordersHTML = orders.map((order) => {
      return `<li>Order #${order.id}</li>`;
    });
  
    return ordersHTML.join("");
  };