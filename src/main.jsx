import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "bootstrap";
import "./assets/all.scss";
import router from "./router";

// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </StrictMode>
);
