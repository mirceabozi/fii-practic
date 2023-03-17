import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import NavBar from "../layout/NavBar"

import isLoggedIn from "../../utils/auth"
import styled from "styled-components"

const Background = styled.div`
  > div:nth-child(2) {
    margin-top: 60px;
    padding-top: 60px;
    min-height: 100vh;
  }
`

const PrivateRoute = () => {
  return isLoggedIn() ? (
    <Background>
      <NavBar />
      <Outlet />
    </Background>
  ) : (
    <Navigate to="/auth/login" />
  )
}

export default PrivateRoute
