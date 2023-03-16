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

  > div {
    background: linear-gradient(to left, #34e89e, #0f3443);
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
