import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"

const Header = styled("div")`
  background: grey;
  color: grey;
  marginbottom: 1.45rem;
`

const linkStyles = css`
  color: white;
`

const headerStyles = css`
  margin: auto;
  width: 100%;
  padding: 1em;
`

export default ({ siteTitle }) => (
  <Header>
    <header>
      <h1 style={{ margin: 0 }}>
        <Link to="/" css={linkStyles}>
          {siteTitle}
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
