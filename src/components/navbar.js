import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import Image from "../components/image"

const navbarStyles = css`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 100vh;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 15px;
  color: transparent;
  box-shadow: 0 4px 6px white;
  z-index: 600;
`

const navbarGroupStyles = css`
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;

  &::after {
    content: "";
    width: calc(100% - 20px);
    position: absolute;
    bottom: 0;
    left: 10px;
    border-bottom: 1px solid grey;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }
`

const NavbarLinks = (
  <div css={navbarGroupStyles}>
    <Link to="/">Home</Link>
    <Link to="/">About</Link>
    <Link to="/">Projects</Link>
    <Link to="/">Contact</Link>
  </div>
)

export const NavBar = () => {
  return <div css={navbarStyles}>{NavbarLinks}</div>
}

export default NavBar
