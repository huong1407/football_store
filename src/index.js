import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Footballboots from './pages/Footballboots/Footballboots';
import Search from './pages/Search/Search';

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
