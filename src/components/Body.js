import React from "react";
import Header from "./Header";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

const Body = () => {
  
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
