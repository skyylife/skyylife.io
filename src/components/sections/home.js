/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { Element } from "react-scroll"

const homeDivStyle = css`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin: 2rem 0 1rem 0;
  justify-content: center;
  text-align: center;
  width: 100vw;
`

const h1Style = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 200%;
`

const copyrightStyle = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 200%;
`

const Home = () => {
  return (
    <Element id="home" name="home" className="element">
    <div css={homeDivStyle}>
      <h3 css={h1Style}>To Live and Embrace:</h3>
      <p css={copyrightStyle}>
        Skyylife is freedom through inovation. We are a culmination of minds
        with different backgrounds throught the tech, design, security and other
        spaces. Our goal is to create, design, and innovative products that help
        people enhance their lives and live freely.
      </p>
    </div>
    </Element>
  )
}

export default Home
