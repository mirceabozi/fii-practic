import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { auth, db } from "../../utils/firebase"
import MatchList from "./components/MatchList"
import UsersList from "./components/UsersList"

const Dashboard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 60px);
`

export default function Matcher() {
  const [userListData, setUserListData] = useState({
    users: [],
    matches: [],
    matchIds: [],
    userMemes: [],
    documentId: "",
  })

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      const userDetails = snapshot.docs.find(
        (doc) => doc.data().userId === auth?.currentUser?.uid
      )
      const allUsers = snapshot.docs.map((doc) => doc.data())
      const matchIds = userDetails.data().matching

      const potentialMatches = allUsers.filter(
        (user) => !matchIds.includes(user.userId)
      )

      const currentMatches = allUsers.filter((user) =>
        matchIds.includes(user.userId)
      )

      setUserListData((prev) => ({
        ...prev,
        users: potentialMatches,
        matches: currentMatches,
        matchIds,
        documentId: userDetails.id,
      }))
    })
  }, [])

  useEffect(() => {
    db.collection("memes").onSnapshot((snapshot) => {
      const memes = snapshot.docs.map((doc) => doc.data())

      const memesByProfile = userListData.users.reduce((acc, curr) => {
        acc[curr.userId] = memes.filter((doc) => doc.userId === curr.userId)
        return acc
      }, {})

      setUserListData((prev) => ({ ...prev, userMemes: memesByProfile }))
    })
  }, [userListData.users])

  return (
    <Dashboard>
      <MatchList userListData={userListData} />
      <UsersList userListData={userListData} />
    </Dashboard>
  )
}
