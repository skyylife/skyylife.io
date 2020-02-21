import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "../components/header"
import ContactForm from "../components/form"

const Wrapper = styled("div")`
  border: 2px solid grey;
  padding: 1rem;
  backgound: grey;
`

export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
          background: transparent;
          color: transparent;
        }
      `}
    />
    {children}
  </Wrapper>
)
