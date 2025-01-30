// TransientState.js

let currentState = {
    metal: 0,
    size: 0,
    style: 0,
    hasDiamonds: false,
    // Add other properties as needed
  };
  
  const logState = () => {
    console.log("Transient State:", currentState);
  };
  
  export const setMetalChoice = (metal) => {
    currentState.metal = metal;
    logState();
  };
  
  export const setSizeChoice = (size) => {
    currentState.size = size;
    logState();
  };
  
  export const setStyleChoice = (style) => {
    currentState.style = style;
    logState();
  };
  
  export const setHasDiamonds = (hasDiamonds) => {
    currentState.hasDiamonds = hasDiamonds;
    logState();
  };
  
  // Add other setter functions as neede
export const placeOrder = async () => {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentState),
    };
  
    const response = await fetch("http://localhost:8088/orders", postOptions);
  
    if (response.ok) {
      const order = await response.json();
      console.log("Order placed successfully!", order);
    } else {
      console.error("Error placing order:", response.status);
    }
  
    const customEvent = new CustomEvent("orderSubmitted");
    document.dispatchEvent(customEvent);
  };