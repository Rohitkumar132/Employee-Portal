import React from "react";
import ReactDOM from 'react-dom/client';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "store/storeProvider";
// import fakeBackend from 'helpers/AuthType/fakeBackend';
import App from "./App";
import "./i18n";

// fakeBackend();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.Fragment>
);

serviceWorker.unregister()
