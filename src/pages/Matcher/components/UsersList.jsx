import React from "react"
import styled from "styled-components"
import UserCard from "./UserCard"

const Users = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    margin-bottom: 60px;
  }
`

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`

export default function UsersList({ userListData }) {
  const { users, userMemes, documentId, matchIds } = userListData

  function renderUserCard(card) {
    return (
      <UserCard
        {...card}
        documentId={documentId}
        userMemes={userMemes}
        matchIds={matchIds}
      />
    )
  }

  return (
    <Users>
      <h2>Find your Meme Match</h2>
      <Wrap>{users.map(renderUserCard)}</Wrap>
    </Users>
  )
}
