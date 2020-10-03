/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { Card } from "react-bootstrap"
import { headerStyles } from "../../styles/shared-styles"
import { Element } from "react-scroll"
import jamesAv from "../../images/James.png"
import dymonAv from "../../images/Dymon.png"
import aaronAv from "../../images/Aaron.png"
import sharroneAv from "../../images/Sharrone.png"
import quinceyAv from "../../images/Quincey.png"

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const aboutGridStyles = css`
  display: grid;
  grid-auto-rows: minmax(100px, 300px);
  grid-template-columns: repeat(2, auto);
  grid-auto-flow: dense;

  grid-gap: 30px;
  flex: 1 0 auto;
  margin: 1rem;
  padding: 0.5em;

  &:nth-of-type(even) {
    justify-content: flex-end;
    grid-column: 1 / 2;
  }
`

const cardStyles = url => css`
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
  width: 300px;
  background-image: url(${url});
  background-position: center center;
  background-color: transparent;
  background-size: auto 100%;
  background-repeat: no-repeat;

  .card-body {
    height: 100%;
    width: auto;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #131821;
    justify-content: flex-start;
  }

  .card-title {
    color: white;
    font-size: 40px;
    position: relative;
    text-align: center;
  }
`
const excerptStyles = css`
  color: white;
  font-size: 20px;
`

const userData = [
  {
    id: 0,
    name: "James Jarrett",
    avatar: `${jamesAv}`,
    excerpt: (
      <p>
        This is James, Oklahoma State Electrical Engineering Technology
        graduate, currently working as a software engineer for a startup. James
        has a passion for making technologies and opportunities accessible to
        everyone.
      </p>
    ),
  },
  {
    id: 1,
    name: "Aaron Shepherd",
    avatar: `${aaronAv}`,
    excerpt: <p>This is Aaron</p>,
  },

  {
    id: 2,
    name: "Dymon Johnson",
    avatar: `${dymonAv}`,
    excerpt: <p>This is Dymon</p>,
  },
  {
    id: 3,
    name: "Quincey Thomas",
    avatar: `${quinceyAv}`,
    excerpt: <p>This is Quincey</p>,
  },

  {
    id: 4,
    name: "Sharrone Berry-Davis",
    avatar: `${sharroneAv}`,
    excerpt: <p>This is Sharrone</p>,
  },
]

const About = () => {
  return (
    <Element id="about" name="about" className="element">
      <div css={wrapperStyles}>
        <header css={headerStyles("flex-start")}>The High Council</header>

        {userData.map(u => (
          <div css={aboutGridStyles}>
            <Card key={u.id} css={cardStyles(u.avatar)}>
              <Card.Body>
                <Card.Title>{u.name}</Card.Title>
              </Card.Body>
            </Card>
            <span css={excerptStyles}> {u.excerpt} </span>
          </div>
        ))}
      </div>
    </Element>
  )
}

export default About
