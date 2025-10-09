import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AllApps from "../Pages/AllApps/AllApps";
import InstallApps from "../Pages/InstallApps/InstallApps";

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
        path: "/AllApps",
        Component: AllApps,
      },

      {
        path: "/AppDetails/:id",
        loader:()=> fetch("/FeatureApps.json"),
        Component: AppDetails,
      },
      {
        path: "/InstallApps",
        loader:()=> fetch("/FeatureApps.json"),
        Component: InstallApps,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
