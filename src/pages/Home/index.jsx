import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../../components/cards/Meme"

const HomeWrap = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function renderMemes(meme) {
  return <Card key={meme.id} img={meme.url} name={meme.name} />
}

function Home() {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const result = await response.json()

      setMemes(result?.data?.memes)
    }

    getMemes()
  }, [])

  return <HomeWrap>{memes.length && memes.map(renderMemes)}</HomeWrap>
}

export default Home
