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

const titleStyles = css`
  color: black;
  textdecoration: ;
`

export default ({ siteTitle }) => (
  <Header>
    <header>
      <div
        style={{
          margin: `auto`,
          maxWidth: 960,
          padding: `1rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
