/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const wrapperStyle = css`
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const navBarStyles = css`
  width: 60vw;
  height: 8vh;
  display: flex;
  justify-content: flex-end;
`

const Header = () => {
  return (
    <div css={wrapperStyle}>
      <Navbar sticky="top" variant="dark" css={navBarStyles}>
        <Navbar.Brand href="#home">
          <img src="/sl-logo-short.png" width={30} height={30} alt="sl-logo" />
        </Navbar.Brand>
        <Nav justify variant="tabs">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
