import { StoreProvider } from "store/storeProvider";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Toaster } from "sonner";
import React from "react";
import App from "./App";
import "./i18n";

// import fakeBackend from 'helpers/AuthType/fakeBackend';
// fakeBackend();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <StoreProvider>
      <BrowserRouter>
        <Toaster
          richColors
          visibleToasts={10}
          position="top-right"
         />
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.Fragment>
);

serviceWorker.unregister()
