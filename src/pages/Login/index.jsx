import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../components/layout/Auth"
import { auth, authService } from "../../utils/firebase"

const loginPayload = {
  email: "diana.test@yahoo.com",
  password: "12345678",
}

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")

  //M-am inspirat de la Mihail de pe proiect ca sa imi vina mai usor
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

  return (
    <AuthLayout
      errorMessage={signupError}
      handleSubmit={handleLogin}
      submitText="Login"
      redirectLink="/register"
      redirectLinkText="Register"
    >
      <Input
        autoComplete="username"
        label="Username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        autoComplete="password"
        label="Password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthLayout>
  )
}

export default Login
