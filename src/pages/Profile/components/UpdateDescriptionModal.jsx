import React, { useEffect } from "react"
import { Button, Input, Modal } from "antd"
import { useState } from "react"
import { database, dbService } from "../../../utils/firebase"

export default function UpdateDescriptionModal({ currentDescription }) {
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState(currentDescription)

  useEffect(() => {
    setDescription(currentDescription)
  }, [currentDescription])

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    const changeDescription = async () => {
      const getUserByIdQuery = database.query(
        database.collection(dbService, "users"),
        database.where("userId", "==", "XnkYDIA7yzPdOsihqbxXk8qqDoV2")
      )
      const users = await database.getDocs(getUserByIdQuery)
      const userId = users.docs?.[0].id

      await database.updateDoc(database.doc(dbService, "users", userId), {
        description: description,
      })
      setDescription("")
      setOpen(false)
    }

    changeDescription()
  }
  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={showModal}>Edit description</Button>
      <Modal
        title="Edit Description"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          label="Description"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </Modal>
    </>
  )
}
