import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { createBrowserRouter } from "react-router-dom"
import PrivateRoute from "../components/common/PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
        index: true,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
])

export default router
