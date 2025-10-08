import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: '/AllApps'
        

      },



      {
        path: '/AppDetails/:id',
        Component:AppDetails 
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
