let currentState = {
  id: 0, 
  metalId: 0,
  sizeId: 0,
  styleId: 0,
  hasDiamonds: false,
};

// Ensure order ID starts from the highest existing order ID
let orderIdCounter = 1;

// Fetch the highest existing order ID when the app starts
const fetchHighestOrderId = async () => {
  try {
    const response = await fetch("http://localhost:8088/orders");
    const orders = await response.json();

    if (orders.length > 0) {
      const highestId = Math.max(...orders.map(order => order.id));
      orderIdCounter = highestId + 1; // Start from the next available ID
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

// Fetch the latest order ID on page load
fetchHighestOrderId();

const logState = () => {
  console.log("Transient State:", currentState);
};

export const setMetalChoice = (metalId) => {
  console.log("Setting Metal ID:", metalId); // Debugging
  currentState.metalId = metalId; // Ensure it's the ID, not an object
  logState();
};

export const setSizeChoice = (sizeId) => {
  console.log("Setting Size ID:", sizeId); // Debugging
  currentState.sizeId = sizeId;
  logState();
};

export const setStyleChoice = (styleId) => {
  console.log("Setting Style ID:", styleId); // Debugging
  currentState.styleId = styleId;
  logState();
};

export const setHasDiamonds = (hasDiamonds) => {
  console.log("Setting Has Diamonds:", hasDiamonds); // Debugging
  currentState.hasDiamonds = hasDiamonds;
  logState();
};

export const placeOrder = async () => {
  if (!currentState.metalId || !currentState.sizeId || !currentState.styleId) {
    window.alert("Error: Order must include metal, size, and style before placing.");
    return;
  }

  currentState.id = orderIdCounter;
  orderIdCounter++;

  const newOrder = {
    id: currentState.id, // Assign correct ID
    metalId: currentState.metalId,
    sizeId: currentState.sizeId,
    styleId: currentState.styleId,
    hasDiamonds: currentState.hasDiamonds
  };

  console.log("Submitting Order:", newOrder); // Debugging log

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrder),
  };

  const response = await fetch("http://localhost:8088/orders", postOptions);

  if (response.ok) {
    const order = await response.json();
    console.log("Order placed successfully!", order);
  } else {
    console.error("Error placing order:", response.status);
  }

  // Reset the state for the next order
  currentState = {
    id: 0,
    metalId: 0,
    sizeId: 0,
    styleId: 0,
    hasDiamonds: false,
  };

  const customEvent = new CustomEvent("orderSubmitted");
  document.dispatchEvent(customEvent);
};
