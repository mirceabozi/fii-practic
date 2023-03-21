import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../../components/cards/Meme"
import { db } from "../../utils/firebase"

const HomeWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function renderMemes(meme) {
  return (
    <Card
      key={meme.id}
      img={meme.imageUrl}
      name={meme.caption}
      username={meme.username}
    />
  )
}

function Home() {
  const [memes, setMemes] = useState([])

  // get all users memes
  useEffect(() => {
    db.collection("memes")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMemes(
          snapshot.docs.map((meme) => ({
            id: meme.id,
            ...meme.data(),
          }))
        )
      })
  }, [])

  return <HomeWrap>{memes.length && memes.map(renderMemes)}</HomeWrap>
}

export default Home
