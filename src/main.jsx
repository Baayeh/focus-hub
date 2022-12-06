import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Layout from "./routes/Layout";
import Timer from "./routes/Timer";
import Focus from "./routes/Focus";
import Alarm from "./routes/Alarm";
import WorldClock from "./routes/WorldClock";
import Stopwatch from "./routes/Stopwatch";
import store from "./store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
      {
        path: "stopwatch",
        element: <Stopwatch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
