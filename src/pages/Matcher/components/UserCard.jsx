import React, { useCallback } from "react"
import styled from "styled-components"
import { faCircleXmark, faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, Carousel, Image } from "antd"
import { db } from "../../../utils/firebase"

const ProfileCard = styled(Card)`
  width: 510px;
`

const Details = styled.div`
  h3 {
    margin: 5px 0;
  }

  p {
    margin: 0px;
  }
`

const CardButton = styled.button`
  border-radius: 50%;
  padding: 18px;
  font-size: 30px;
  border: none;
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`

function MemeCarousel({ memes }) {
  return (
    <Carousel>
      {memes.map(({ imageUrl, caption }) => (
        <Image key={imageUrl} src={imageUrl} alt={caption} height={500} />
      ))}
    </Carousel>
  )
}

export default function UserCard({
  documentId,
  userId,
  username,
  description,
  userMemes,
  matchIds,
}) {
  const handleAccept = useCallback(() => {
    const pushToMatches = async () => {
      db.collection("users")
        .doc(documentId)
        .update({
          matching: [...matchIds, userId],
        })
    }
    pushToMatches()
  }, [documentId, matchIds, userId])

  const handleReject = useCallback(() => {
    //TO DO ANIMATION
    console.log("Rejected")
  }, [])

  const buttons = [
    {
      icon: faCircleXmark,
      handleClick: handleReject,
    },
    {
      icon: faHeart,
      handleClick: handleAccept,
    },
  ]

  function renderButton({ icon, handleClick }) {
    return (
      <CardButton onClick={handleClick}>
        <FontAwesomeIcon icon={icon} />
      </CardButton>
    )
  }

  return (
    <ProfileCard key={userId}>
      <MemeCarousel memes={userMemes[userId] || []} userId={userId} />

      <Details>
        <h3>{username}</h3>
        <p>{description}</p>
      </Details>

      <ButtonWrap>{buttons.map(renderButton)}</ButtonWrap>
    </ProfileCard>
  )
}
