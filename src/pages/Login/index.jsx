import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../components/layout/Auth"
import { auth, authService } from "../../utils/firebase"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        localStorage.setItem("isLoggedIn", "true")
      })
      .catch((err) => setSignupError(err.message))
  }

  return (
    <AuthLayout
      errorMessage={signupError}
      handleSubmit={handleLogin}
      submitText="Login"
      redirectLink="/auth/register"
      redirectLinkText="Register"
    >
      <Input
        autoComplete="email"
        label="Email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        autoComplete="password"
        label="Password"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthLayout>
  )
}

export default Login
