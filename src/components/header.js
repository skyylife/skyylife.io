/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import * as Scroll from "react-scroll"
import { Link, animateScroll as scroll } from "react-scroll"
import Logo from "../images/sl-logo-short.png"

const navBarStyles = css`
  color: white;
  width: 60vw;
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;
`

const scrollToTop = function() {
  scroll.scrollToTop()
}

const Header = () => {
  return (
      <Navbar sticky="top" variant="dark" css={navBarStyles}>
        <Navbar.Brand>
          <img 
            src={Logo} 
            width={30} 
            height={30} 
            alt="sl-logo"
            onClick={scrollToTop}
           />
        </Navbar.Brand>
        <Nav justify variant="tabs" className="nav" id="navbar">
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
        </Nav>
      </Navbar>
  )
}

export default Header
