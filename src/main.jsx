import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  </>
)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
