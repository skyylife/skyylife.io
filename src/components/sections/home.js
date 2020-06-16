/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"

const homeDivStyle = css`
  display: flex;
  flex-direction: column;
  background: transparent
  marginleft: 0;
  marginright: 0;
  marginbottom: 1rem;
  justify-content: flex-start;
  width: 40vw;
`

const h1Style = css`
  flex: 1;
  font-size: 380%;
`

const copyrightStyle = css`
  flex: 1;
  font-size: 200%;
`

const navBarStyles = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
`

const Home = () => {
  return (
    <div css={homeDivStyle}>
      <h3 css={h1Style}>To Live and Embrace...</h3>
      <p css={copyrightStyle}>
        Skyylife is freedom through technology. We are a culmination of minds
        with different backgrounds throught the tech, design, security and other
        sectors. Our goal is to create and design innovative products that help
        people enhance their lives and live freely.
      </p>
    </div>
  )
}

export default Home
