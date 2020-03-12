import React from "react"
import { Global, css } from "@emotion/core"
import NavBar from "../components/navbar"

const wrapperStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`

export const Layout = ({ children }) => {
  return <div>{children}</div>
}

export default Layout
