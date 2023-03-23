import React, { useCallback } from "react"
import { Avatar, Button } from "antd"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { db } from "../../../utils/firebase"

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

export default function MatchList({ userListData }) {
  const { matches, matchIds, documentId } = userListData

  const handleClick = useCallback(
    (matchId) => {
      const deleteMatch = async () => {
        db.collection("users")
          .doc(documentId)
          .update({
            matching: matchIds.filter((id) => id !== matchId),
          })
      }

      deleteMatch()
    },
    [documentId, matchIds]
  )

  function renderMatch({ username, userId, avatarUrl }) {
    return (
      <Wrap>
        <Avatar src={avatarUrl} alt={username} />
        <div>{username}</div>
        <Button
          type="text"
          icon={<FontAwesomeIcon icon={faTrash} />}
          onClick={() => handleClick(userId)}
        />
      </Wrap>
    )
  }

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
