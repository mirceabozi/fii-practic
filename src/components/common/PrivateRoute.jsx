import React from "react"
import { Navigate, Outlet } from "react-router-dom"

import isLoggedIn from "../../utils/auth"

const PrivateRoute = () => {
  return isLoggedIn() ? (
    <div>
      {/* TODO: Insert Page Layout */}
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth/login" />
  )
}

export default PrivateRoute
