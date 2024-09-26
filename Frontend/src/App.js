import PropTypes from 'prop-types';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { layoutTypes } from "./constants/layout";
import { authProtectedRoutes, publicRoutes } from "./routes";
import Authmiddleware from "./routes/route";
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";
import "./assets/scss/theme.scss";
import { useStores } from 'store/storeProvider';
import { observer } from "mobx-react-lite";

const getLayout = (layoutType) => {
  let Layout = VerticalLayout;
  switch (layoutType) {
    case layoutTypes.VERTICAL:
      Layout = VerticalLayout;
      break;
    case layoutTypes.HORIZONTAL:
      Layout = HorizontalLayout;
      break;
    default:
      break;
  }
  return Layout;
};
const App = () => {
  const { layoutStore } = useStores();

  const { layoutType } = layoutStore;

  const Layout = getLayout(layoutType);

  return (
    <Routes>
      {publicRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={
            <NonAuthLayout>
              {route.component}
            </NonAuthLayout>
          }
          key={idx}
          exact={true}
        />
      ))}

      {authProtectedRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={
            <Authmiddleware>
              <Layout>{route.component}</Layout>
            </Authmiddleware>}
          key={idx}
          exact={true}
        />
      ))}
    </Routes>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

export default observer(App);