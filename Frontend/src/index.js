import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { StoreProvider } from "store/storeProvider";
// import { Provider } from "react-redux";

// import store from "./store";
import fakeBackend from 'helpers/AuthType/fakeBackend';

fakeBackend();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <React.Fragment>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.Fragment>
  // </Provider>
);

serviceWorker.unregister()
