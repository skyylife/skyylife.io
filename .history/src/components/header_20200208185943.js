import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"

const Header = styled("div")`
  background: #4288ae;
  color: #4288ae;
  marginbottom: 1.45rem;
`

const linkStyles = css`
  color: white;
  text-decoration: none;

  &:hover {
    color: #ff0000;
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

export default ({ siteTitle }) => (
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
