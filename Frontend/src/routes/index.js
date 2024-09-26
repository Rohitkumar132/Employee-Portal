import React from "react";
import { Navigate } from "react-router-dom";

// Profile
// import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
// import Register from "../pages/Authentication/Register";
// import ForgetPwd from "../pages/Authentication/ForgetPassword";

import Pages404 from "pages/Others/pages-404";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import EmployeeList from "pages/Employee/List";
import AddEmployee from "pages/Employee/AddEmployee";

const authProtectedRoutes = [
  // { path: "/dashboard", component: <Dashboard /> },
  { path: "/dashboard", component: <EmployeeList /> },
  { path: "/add-employee", component: <AddEmployee /> },
  // //profile
  // { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "/*", component: <Pages404 /> },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  // { path: "/forgot-password", component: <ForgetPwd /> },
  // { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
