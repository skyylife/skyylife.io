import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"

const headerStyles = css`
  background: white;
  color: white;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <header style={headerStyles}>
    <div>
      <h1>
        <Link to="/" style={headerStyles}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
