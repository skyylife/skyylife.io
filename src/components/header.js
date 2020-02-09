import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import ShortLogo from "./short-logo"

const Header = styled("div")`
  background: #333333;
  color: #333333;
  marginbottom: 1rem;
`

const linkStyles = css`
  color: white;
  text-decoration: none;

  &:hover {
    color: #4288ae;
  }
`

const headerStyles = css`
  smargin: auto;
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

const imageStyles = css`
  height: auto;
  width: auto;
`

export default ({ siteTitle }) => (
  <div>
    <Header>
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
