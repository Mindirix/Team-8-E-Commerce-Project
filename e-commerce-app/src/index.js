import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ProductContext } from "./context/Context";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ProductContext>
      <App tab="home" />
    </ProductContext>
  </React.StrictMode>
);
