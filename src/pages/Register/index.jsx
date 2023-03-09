import { Button } from "antd"
import React from "react"

import { auth, authService } from "../../utils/firebase"

const registerPayload = {
  username: "diana",
  email: "diana.test@yahoo.com",
  password: "12345678",
}

const handleRegister = () => {
  auth
    .createUserWithEmailAndPassword(
      authService,
      registerPayload.email,
      registerPayload.password
    )
    .then(async () => {
      auth.updateProfile(authService.currentUser, {
        displayName: registerPayload,
      })
    })
    .catch((err) => console.log(err.message))
}

function Register() {
  return (
    <div>
      Register pls!
      <Button onClick={handleRegister}>Register</Button>
    </div>
  )
}

export default Register
