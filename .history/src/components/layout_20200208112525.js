import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "../components/header"

const Wrapper = styled("div")`
  border: 2px solid grey;
  padding: 1rem;
`

export default ({ children }) => (
  <Wrapper>
    <Header siteTitle={Skyylife} />
    <Global
      styles={css`
        div {
          backgound: red;
          color: grey;
        }
      `}
    />
    {children}
  </Wrapper>
)
