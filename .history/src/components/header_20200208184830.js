import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"

import Image from "../components/image"

const Header = styled("div")`
  background: grey;
  color: grey;
  marginbottom: 1.45rem;
`

const linkStyles = css`
  color: white;
  text-decoration: none;
`

const headerStyles = css`
  margin: auto;
  width: 100%;
  padding: 1em;
`

const h1Style = css`
  margin: auto;
`

export default ({ siteTitle }) => (
  <Header>
    <header css={headerStyles}>
      <h1 css={h1Style}>
        <Link to="/" css={linkStyles}>
          Home
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
