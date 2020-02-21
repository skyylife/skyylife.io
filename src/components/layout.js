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
    <Header siteTitle={"SkyyLife"} />
    <ContactForm />

    {/* <Global
      styles={css`
        div {
          background: #333333;
          color: grey;
        }
      `}
    /> */}
    {children}
  </Wrapper>
)
