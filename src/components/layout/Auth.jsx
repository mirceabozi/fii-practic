import React from "react"
import styled from "styled-components"

import { Button } from "antd"
import { Link } from "react-router-dom"

const Container = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 300px;
  border-radius: 10px;

  > * {
    margin-bottom: 10px;
  }
`

const FormWrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Error = styled.span`
  color: red;
`
const ButtonWrap = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`

function AuthLayout({
  children,
  errorMessage,
  handleSubmit,
  submitText,
  redirectLink,
  redirectLinkText,
}) {
  return (
    <FormWrap>
      <Container>
        {children}
        <Error>{errorMessage}</Error>
        <ButtonWrap>
          <Button type="primary" onClick={handleSubmit}>
            {submitText}
          </Button>
          <Button>
            <Link to={redirectLink}>{redirectLinkText}</Link>
          </Button>
        </ButtonWrap>
      </Container>
    </FormWrap>
  )
}

export default AuthLayout
