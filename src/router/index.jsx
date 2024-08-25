import { createBrowserRouter } from "react-router-dom";
import MainLayout from '@components/Layout/MainLayout/MainLayout';
import Home from "@pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <h1> Error page</h1>
    },
    {
      path: "/job/:id",
      element: <h1>Job id</h1>
    }
  ])
  