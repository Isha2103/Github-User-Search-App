import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserDataContextProvider } from "./contexts/userDataContext";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserDataContextProvider>
      <App />    
    </UserDataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
