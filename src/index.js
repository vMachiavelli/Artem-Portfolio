import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home"; // Import your Home component
import "./Styles.css"; // Import your custom styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
