import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import Image from "../components/image"
import Background from "../components/background"

const Header = styled("div")`
  background: #333333;
  color: #333333;
  marginbottom: 1rem;
  z-index: 999;
`

const linkStyles = css`
  color: white;
  text-decoration: none;

  &:hover {
    color: #4288ae;
  }
`

const headerStyles = css`
  margin: 0 auto;
  width: 100%;
  padding: 1em;
  text-shadow: 2px 2px #000000;
`

const h1Style = css`
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`

export default ({ siteTitle }) => (
  <div>
    <Header>
      <Background />
      <Image />

      <header css={headerStyles}>
        <h1 css={h1Style}>
          <Link to="/" css={linkStyles}>
            Home
          </Link>
          <Link to="/" css={linkStyles}>
            About
          </Link>
          <Link to="/" css={linkStyles}>
            Projects
          </Link>
          <Link to="/" css={linkStyles}>
            Contact
          </Link>
        </h1>
      </header>
    </Header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
