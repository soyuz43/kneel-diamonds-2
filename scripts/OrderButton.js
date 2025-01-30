// OrderButton.js

import { placeOrder } from "./TransientState.js";

export const OrderButton = async () => {
  const buttonHTML = `
    <button id="orderButton">Place Order</button>
  `;

  document.addEventListener("click", (event) => {
    if (event.target.id === "orderButton") {
      placeOrder();
    }
  });

  return buttonHTML;
};