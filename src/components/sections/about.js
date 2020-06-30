import React from "react"
import { jsx, css } from "@emotion/core"
import { Card } from "react-bootstrap"
import { headerStyles } from "../../styles/shared-styles"

import jamesAv from '../../images/James.png'
import dymonAv from '../../images/Dymon.png'
import aaronAv from '../../images/Aaron.png'
import sharroneAv from '../../images/Sharrone.png'
import quinceyAv from '../../images/Quincey.png'

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const aboutGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  grid-auto-rows: minmax(200px, 300px);
  grid-gap: 30px;
  flex: 1 0 auto;
  margin: 1rem;
  padding: 0.5em;
  justify-content: space-evenly;
`
// Need to add logic for only translating Y above certain resolution/size
const cardStyles = url => css`
  display: flex;
  border: none;
  flex-direction: row;
  margin: 0.5em;
  padding: 1em;
  width: auto;
  background-image: url(${url});
  background-position: center center;
  background-color: transparent;
  background-size: auto 100%;
  background-repeat: no-repeat;

  &:nth-child(even) {
    flex-direction: row-reverse;

  }


  .card-body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: transform 2s, opacity 500ms, height 1s, background-color 1s;
    background-color: #131821;
    justify-content: flex-start;
  }

  .card-text {
    color: white;
    font-size: 20px;
    position: relative;
    text-align: center;
  }

  &:nth-child(4):hover {
    transition: transform 0.7s;
    transform: translateY(-10em);
  }

  &:nth-child(5):hover {
    transition: transform 0.7s;
    transform: translateY(-10em);
  }

  &:hover .card-body {
    opacity: 0.95;
    background-color: #31637f;
    height: 150%;
    z-index: 4;

  }

  

`

const userData = [
  {
    id: 0,
    name: "James Jarrett",
    avatar:`${jamesAv}`,
    excerpt: "This is James, the CEO",
  },
  {
    id: 1,
    name: "Aaron Shepherd",
    avatar: `${aaronAv}`,
    excerpt: "This is Aaron, the CTO",
  },

  {
    id: 2,
    name: "Dymon Johnson",
    avatar: `${dymonAv}`,
    excerpt: "This is Dymon, the CDO",
  },
  {
    id: 3,
    name: "Quincey Thomas",
    avatar: `${quinceyAv}`,
    excerpt: "This is Quincey, the CPO",
  },

  {
    id: 4,
    name: "Sharrone Berry-Davis",
    avatar: `${sharroneAv}`,
    excerpt: "This is Sharrone, the CFO",
  },
]

const About = () => {
  return (
    <div css={wrapperStyles}>
      <header css={headerStyles("flex-end")}>The High Council</header>
      <div css={aboutGridStyles}>
        {userData.map(u => (
          <Card key={u.id} css={cardStyles(u.avatar)}>
            <Card.Body>
            <Card.Title>{u.name}</Card.Title>
            <Card.Text>{u.excerpt}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default About
