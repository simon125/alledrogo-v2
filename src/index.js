import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
// krok 3 import nowostworzonego stora
import { store } from "./store";

import "@picocss/pico";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* krok 1 - setup provider reduxowego */}
      {/* krok 4 - przekazanie zaimportowanego stora jako props  */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
