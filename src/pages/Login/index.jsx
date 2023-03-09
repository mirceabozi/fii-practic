import React from "react"
import { Button } from "antd"

import { auth, authService } from "../../utils/firebase"

const loginPayload = {
  email: "diana.test@yahoo.com",
  password: "12345678",
}

const handleLogin = () => {
  auth
    .signInWithEmailAndPassword(
      authService,
      loginPayload.email,
      loginPayload.password
    )
    .then(() => {
      localStorage.setItem("isLoggedIn", "true")
    })
    .catch((err) => console.log(err.message))
}

function Login() {
  return (
    <div>
      Login Here!
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login
