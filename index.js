// index.js


import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,rootElement
);

// import { createRoot } from "react-dom/client";
// const root = createRoot(rootElement);
