// ChangeListeners.js

import { setMetalChoice } from "./TransientState.js";
import { setSizeChoice } from "./TransientState.js";
import { setStyleChoice } from "./TransientState.js";

const handleMetalChoice = (event) => {
  if (event.target.name === "metal") {
    setMetalChoice(parseInt(event.target.value));
  }
};

const handleSizeChoice = (event) => {
  if (event.target.name === "size") {
    setSizeChoice(parseInt(event.target.value));
  }
};

const handleStyleChoice = (event) => {
  if (event.target.name === "style") {
    setStyleChoice(parseInt(event.target.value));
  }
};

document.addEventListener("change", (event) => {
  handleMetalChoice(event);
  handleSizeChoice(event);
  handleStyleChoice(event);
});