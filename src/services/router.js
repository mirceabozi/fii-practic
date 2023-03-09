import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { createBrowserRouter } from "react-router-dom"
import { Outlet } from "react-router-dom"

function TestRoute() {
  return (
    <div>
      Layout begin
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <TestRoute />,
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
