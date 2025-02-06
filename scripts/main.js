// main.js

import { MetalOptions } from './MetalOptions.js';
import { SizeOptions } from './SizeOptions.js';
import { StyleOptions } from './StyleOptions.js';
import { OrderButton } from "./OrderButton.js";
import { Orders } from "./Orders.js";
import { placeOrder } from "./TransientState.js";
import "./ChangeListeners.js";

const container = document.getElementById("container");

const render = async () => {
  console.log("Rendering the UI..."); // Debugging to ensure render isn't called multiple times

  const metalOptionsHTML = await MetalOptions();
  const sizeOptionsHTML = await SizeOptions();
  const styleOptionsHTML = await StyleOptions();
  const orderBtnHTML = await OrderButton();
  const ordersHTML = await Orders();

  const composedHTML = `
    <h1>Kneel Diamonds</h1>

    <article class="choices">
      <section class="choices__metals options">
        <h2>Metals</h2>
        ${metalOptionsHTML}
      </section>

      <section class="choices__sizes options">
        <h2>Sizes</h2>
        ${sizeOptionsHTML}
      </section>

      <section class="choices__styles options">
        <h2>Styles</h2>
        ${styleOptionsHTML}
      </section>
    </article>

    <article class="order">
       ${orderBtnHTML}
    </article>

    <article class="customOrders">
      <h2>Custom Jewelry Orders</h2>
      <ul id="ordersList">${ordersHTML}</ul>
    </article>
  `;
  
  container.innerHTML = composedHTML;
};

render();

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    placeOrder();
  }
});

document.addEventListener("orderSubmitted", () => {
  console.log("State of data has changed. Regenerating HTML...");
  render();

  // Add fade-in animation to new orders
  const ordersList = document.getElementById('ordersList');
  const newOrders = ordersList.children;
  for (let i = 0; i < newOrders.length; i++) {
    newOrders[i].classList.add('fadeIn');
  }
});
