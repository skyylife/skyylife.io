import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import ContactForm from "../form"

const Container = styled.div`
  margin: 0;
  display: flex;
  column-count: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
`

const Contact = () => {
  return (
    <>
      <Container>
        <ContactForm />
      </Container>
    </>
  )
}

export default Contact
