import React from "react"
import styled from "styled-components"

const Users = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export default function UsersList({ users, userMemes }) {
  console.log(users, userMemes)
  return (
    <Users>
      <h2>Find your Meme Match</h2>
    </Users>
  )
}
