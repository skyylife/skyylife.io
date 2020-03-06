import PropTypes from "prop-types"
import styled from "@emotion/styled"
import React from "react"
import Image from "../components/image"

const Header = styled("div")`
  background: transparent;
  color: transparent;
  marginbottom: 1rem;
  z-index: 999;
`

export default ({ siteTitle }) => (
  <div>
    <Header>
      <Image />
    </Header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
