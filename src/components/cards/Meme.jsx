import React from "react"
import styled from "styled-components"
const MemeCard = styled.div`
  height: 100%;
  border-radius: 10px;
  background: white;
  width: 450px;
  padding: 30px 20px;
  margin-bottom: 30px;
`
const Meme = styled.div`
  height: 480px;
  background: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  margin: 10px 0;
`
const Details = styled.div`
  font-size: 20px;
`
const Comments = styled.div`
  > div {
    margin: 5px 0px 5px 20px;
    display: flex;
    font-size: 15px;
    flex-flow: row wrap;
  }
`

const Text = styled.div``

const User = styled.div`
  font-weight: 600;
  margin-right: 10px;
`

const comments = [
  {
    user: "User1",
    comment: "Omg this meme is crazy",
  },
  {
    user: "User2",
    comment: "This meme be dank, bruh",
  },
  {
    user: "User3",
    comment: "Yeah that's right",
  },
]

function renderComment({ user, comment }) {
  return (
    <div key={user}>
      <User>{user}</User>
      <Text>{comment}</Text>
    </div>
  )
}

export default function Card({ img, name }) {
  return (
    <MemeCard>
      <Meme img={img} />
      <hr />
      <Details>{name}</Details>
      <Comments>{comments.map(renderComment)}</Comments>
    </MemeCard>
  )
}
