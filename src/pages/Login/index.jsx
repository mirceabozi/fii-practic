import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../components/layout/Auth"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")

  //M-am inspirat de la Mihail de pe proiect ca sa imi vina mai usor

  //  const handleLogin = () => {
  //    auth
  //      .signInWithEmailAndPassword(email, password)
  //      .then((user) => history.push("/"))
  //      .catch((error) => setSignupError(error.message))
  //  }

  function handleLogin() {
    console.log("I AM LOGGED IN BABY!!")
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
