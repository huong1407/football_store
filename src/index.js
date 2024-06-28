import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Pages/Login';
import Homepage from './components/Pages/Homepage';
import Footballboots from './components/Pages/Footballboots';
import Search from './components/Pages/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homepage",
    element: <Homepage />
  },
  {
    path: '/footballboots',
    element: <Footballboots />
  },
  {
    path: '/search',
    element: <Search />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
