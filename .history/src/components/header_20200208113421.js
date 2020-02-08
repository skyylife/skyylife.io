import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{css`
      background: red;
      marginbottom: 1.45rem;
}`}
  >
    <div
      style={css`
        div {
          margin: 0 auto;
          maxwidth: 960;
          padding: 1.45rem 1.0875rem;
        }
      `}
    >
      <h1
        style={css`
          margin: 0;
        `}
      >
        <Link
          to="/"
          style={css`
          div {
            color: black;
            textDecoration: strong;,
          }`}
        >
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
