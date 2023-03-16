import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import Find from "../pages/Find"
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
      {
        path: "/profile",
        index: true,
        element: <Profile />,
      },
      {
        path: "/find",
        index: true,
        element: <Find />,
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
