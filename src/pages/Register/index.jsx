import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../components/layout/Auth"

function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")

  function handleLogin() {
    console.log("I AM Registered BABY!!")
  }
  return (
    <AuthLayout
      errorMessage={signupError}
      handleSubmit={handleLogin}
      submitText="Register"
      redirectLink="/login"
      redirectLinkText="Login"
    >
      <Input
        label="email"
        placeholder="Email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthLayout>
  )
}

export default Register
