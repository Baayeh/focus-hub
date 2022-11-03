import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Layout from "./routes/Layout";
import Timer from "./routes/Timer";
import Focus from "./routes/Focus";
import Alarm from "./routes/Alarm";
import WorldClock from "./routes/WorldClock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "focus-session",
        element: <Focus />,
      },
      {
        path: "timer",
        element: <Timer />,
      },
      {
        path: "alarm",
        element: <Alarm />,
      },
      {
        path: "world-clock",
        element: <WorldClock />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
