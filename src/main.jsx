import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
