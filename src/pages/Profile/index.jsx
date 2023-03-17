import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { database, dbService } from "../../utils/firebase"
import { Button } from "antd"
import UploadAvatar from "./components/UploadAvatar"
import UpdateDescriptionModal from "./components/UpdateDescriptionModal"

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
  font-size: 30px;
`
const Description = styled.div`
  font-size: 18px;
  margin: 10px 0px;
  margin-bottom: 30px;
`

const ActionsWrap = styled.div`
  display: flex;

  & :not(:first-child) {
    margin-left: 8px;
  }
`

export default function Profile() {
  const [userDetails, setUserDetails] = useState({})
  const [profileMemes, setProfileMemes] = useState([])

  useEffect(() => {
    const getUserById = async () => {
      const getUserByIdQuery = database.query(
        database.collection(dbService, "users"),
        database.where("userId", "==", "XnkYDIA7yzPdOsihqbxXk8qqDoV2")
      )

      database.onSnapshot(getUserByIdQuery, (querySnapshot) => {
        const { avatarUrl, description, username, memes } =
          querySnapshot.docs?.[0]?.data()
        setUserDetails({
          avatarUrl,
          description,
          username,
        })
        setProfileMemes(memes)
      })
    }

    getUserById()
  }, [])

  // useEffect(() => {
  //   async function getMemes() {
  //     const response = await fetch("https://api.imgflip.com/get_memes")
  //     const result = await response.json()

  //     setProfileMemes(result?.data?.memes)
  //   }

  //   getMemes()
  // }, [])

  function renderMemes(meme) {
    return <Card key={meme.id} img={meme.url} />
  }

  return (
    <Wrap>
      <Content>
        <Image img={userDetails?.avatarUrl} />
        <Name>{userDetails?.username}</Name>
        <Description>{userDetails?.description || "-"}</Description>
        <ActionsWrap>
          {/* <UploadAvatar /> */}
          {/* <Button>Edit Info</Button> */}
          {/* <Button>Upload Post</Button> */}
          <UpdateDescriptionModal
            currentDescription={userDetails?.description}
          />
        </ActionsWrap>
        <hr />
        <CardWrapper>
          {profileMemes.length === 0 ? (
            <span>You have no memes added yet </span>
          ) : (
            profileMemes.map(renderMemes)
          )}
        </CardWrapper>
      </Content>
    </Wrap>
  )
}
