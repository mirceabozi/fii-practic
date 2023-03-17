import React from "react"
import { UploadOutlined } from "@ant-design/icons"
import { Button, Upload, message } from "antd"
import { v4 as uuid } from "uuid"
import { storage } from "../../../utils/firebase"

const props = {
  name: "file",
  //   action: (file) => {
  //     const myStorage = storage.getStorage()
  //     const fileRef = storage.ref(myStorage, `${file.name}-${uuid()}`)

  //     return storage.uploadBytes(fileRef, file).then((snapshot) => {
  //       console.log("Uploaded a blob or file!")
  //     })
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList)
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`)
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`)
  //     }
  //   },

  //   previewFile(file) {
  //     return null
  //   },
}

export default function UploadAvatar() {
  return (
    <Upload {...props} progress={null}>
      <Button icon={<UploadOutlined />}>Upload Avatar</Button>
    </Upload>
  )
}
