import React, { createContext, useContext } from "react";
import RootStore from "./index";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const rootStore = new RootStore();

  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStores = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStores must be used within a StoreProvider");
  }
  return context;
};
