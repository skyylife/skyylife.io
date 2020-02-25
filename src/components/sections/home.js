import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

const homeDivStyle = css`
  display: flex;
  flex-direction: column;
  background: #3344FE;
  color: #FFFFFF;
  marginleft: 0;
  marginright: 0;
  marginbottom: 1rem;
  align-items: center;
  justify-content: center;
  column-width: auto;
`

const h1Style = css`
  flex: 1;
  font-size: 280%;
`

const Home = () => {
  return (
    <div css={homeDivStyle}>
      <h1 css={h1Style}>To Live and Embrace</h1>
      <p>
        SkyyLife is a culmination of minds focused on improving life with
        technology whether it be software or hardware.
      </p>
    </div>
  )
}

export default Home
