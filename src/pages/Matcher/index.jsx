import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { auth, db } from "../../utils/firebase"
import MatchList from "./components/MatchList"
import UsersList from "./components/UsersList"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 60px auto 0 auto;
`

const Dashboard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 60px);
`

export default function Matcher() {
  const [matches, setMatches] = useState([])
  const [users, setUsers] = useState([])
  const [userMemes, setUserMemes] = useState([])

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      const userDetails = snapshot.docs.find(
        (doc) => doc.data().userId === auth?.currentUser?.uid
      )

      const potentialMatches = snapshot.docs.map((doc) => doc.data())

      setUsers(potentialMatches)
      setMatches(userDetails.data().matching)
    })
  }, [])

  useEffect(() => {
    db.collection("memes").onSnapshot((snapshot) => {
      const memes = snapshot.docs.map((doc) => doc.data())

      const memesByProfile = users.reduce((acc, curr) => {
        acc[curr.userId] = memes.filter((doc) => doc.userId === curr.userId)
        return acc
      }, {})

      setUserMemes(memesByProfile)
    })
  }, [users])

  return (
    <Wrapper>
      <Dashboard>
        <MatchList matches={matches} />
        <UsersList users={users} userMemes={userMemes} />
      </Dashboard>
    </Wrapper>
  )
}
