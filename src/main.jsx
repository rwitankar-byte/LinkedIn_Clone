// main.jsx
//
// WHAT IT DOES:
// Entry point of the app — starts React.
// Finds <div id="root"> in index.html and puts the app inside it.
// YOU DON'T NEED TO EDIT THIS FILE.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);