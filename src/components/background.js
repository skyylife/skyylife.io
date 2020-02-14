import React from "react"
import { jsx, css } from "@emotion/core"
import Tilt from "react-parallax-tilt"

const backgroundStyles = css`
  color: #ffff00;
  background-color: #4288ae;
  width: 1000px;
  height: 500px;
  z-index: 1;
  position: absolute;
`

const Background = () => {
  return (
    <Tilt tiltReverse>
      <div css={backgroundStyles} />
    </Tilt>
  )
}

export default Background
