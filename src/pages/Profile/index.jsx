import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  max-width: 880px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 92%;
  }
`

const Image = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  margin-bottom: 20px;
`

const Card = styled.div`
  background: url(${(props) => props.img}) center center / contain no-repeat
    white;
  height: 350px;
  width: 250px;
  margin: 15px;
  border-radius: 10px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0px 20px;
`

const Name = styled.div`
  color: #fff;
  font-size: 30px;
`
const Description = styled.div`
  font-size: 18px;
  margin: 10px 0px;
  color: #ffffffdb;
  margin-bottom: 30px;
`

export default function Profile() {
  const [profileMemes, setProfileMemes] = useState([])

  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const result = await response.json()

      setProfileMemes(result?.data?.memes)
    }

    getMemes()
  }, [])

  function renderMemes(meme) {
    return <Card key={meme.id} img={meme.url} />
  }

  return (
    <Wrap>
      <Content>
        <Image img="https://yt3.googleusercontent.com/ytc/AL5GRJX7tQgZIex1ymYk2hSYoLVDTkJmlOGFM4S9w48O=s900-c-k-c0x00ffffff-no-rj" />
        <Name>Tuxy Pinguinescu</Name>
        <Description>
          Sunt o persoana interesata de meme-uri, multumesc.
        </Description>
        <hr />
        <CardWrapper>{profileMemes.map(renderMemes)}</CardWrapper>
      </Content>
    </Wrap>
  )
}
