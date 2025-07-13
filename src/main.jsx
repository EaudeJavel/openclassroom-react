import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./components/Router";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
