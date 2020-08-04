/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Scroll, { Link, scroll } from "react-scroll"
import Logo from "../images/sl-logo-short.png"

const ScrollLink = Scroll.ScrollLink

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
  position: fixed;
  top: 0;
  width: 100%;
`

const Header = () => {
  return (
    <div css={wrapperStyle}>
      <Navbar sticky="top" variant="dark" css={navBarStyles}>
        <Navbar.Brand href="#home">
          <img src={Logo} width={30} height={30} alt="sl-logo" />
        </Navbar.Brand>
        <nav justify variant="tabs" className="nav sticky-top" id="navbar">
          <Nav.Link>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </Nav.Link>
        </nav>
      </Navbar>
    </div>
  )
}

export default Header
