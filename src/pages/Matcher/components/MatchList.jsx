import React from "react"
import { Avatar } from "antd"
import styled from "styled-components"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
`

const List = styled.div`
  border-right: 1px solid black;
`

const Title = styled.div`
  text-align: center;
  width: 300px;
  padding: 30px 0px;
  border-bottom: 1px solid;
  font-weight: 600;
`

const NoMatches = styled.div`
  text-align: center;
  padding: 20px;
`

function renderMatch({ username, avatarUrl }) {
  return (
    <Wrap>
      <Avatar src={avatarUrl} alt={username} />
      <div>{username}</div>
    </Wrap>
  )
}

export default function MatchList({ matches }) {
  return (
    <List>
      <Title>Here are your matches</Title>
      {matches.length === 0 ? (
        <NoMatches>You have no matches yet</NoMatches>
      ) : (
        <>{matches.map(renderMatch)}</>
      )}
    </List>
  )
}
