import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css/";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/features/store.js";

//Private Route
import PrivateRoute from "./components/PrivateRoute.jsx";

//Auth
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

//User
import Profile from "./pages/user/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
