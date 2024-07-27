import React from "react";

import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ]
  }
]);

const Body = () => {
  

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
