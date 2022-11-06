import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import Layout from './routes/Layout';
import Timer from './routes/Timer';
import Focus from './routes/Focus';
import Alarm from './routes/Alarm';
import WorldClock from './routes/WorldClock';
import Stopwatch from './routes/Stopwatch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Focus />,
      },
      {
        path: 'timer',
        element: <Timer />,
      },
      {
        path: 'alarm',
        element: <Alarm />,
      },
      {
        path: 'world-clock',
        element: <WorldClock />,
      },
      {
        path: 'stopwatch',
        element: <Stopwatch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
