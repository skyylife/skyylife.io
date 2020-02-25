import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Header from "../components/header"
import ContactForm from "../components/form"

import Home from "../components/sections/home"
import About from "../components/sections/about"
import Projects from "./sections/projects"
import Contact from "./sections/contact"

const Wrapper = styled("div")`
  border: 2px solid grey;
  padding: 1rem;
  backgound: grey;
`

export default ({ children }) => (
  <Wrapper>
    {/* <Global
      styles={css`
        div {
          background: transparent;
          color: transparent;
        }
      `}
    /> */}
    {children}
  </Wrapper>
)
