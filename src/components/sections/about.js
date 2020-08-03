/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import { Card, Container } from "react-bootstrap"
import { headerStyles } from "../../styles/shared-styles"
import { Jumbotron } from "react-bootstrap"
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
  grid-template-columns: repeat(auto-fit, minmax(800px, 1000px));
  grid-auto-rows: minmax(200px, 300px);
  left: 0;
  grid-gap: 30px;
  lflex: 1 0 auto;
  margin: 1rem;
  padding: 0.5em;
`

const cardStyles = url => css`
  display: flex;
  border: none;
  margin: 0.5em;
  padding: 1em;
  width: auto;
  background-image: url(${url});
  background-position: center center;
  background-color: transparent;
  background-size: auto 100%;
  background-repeat: no-repeat;
  float: left;
  flex-direction: row-reverse;

  .card-body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: auto;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #131821;
    justify-content: flex-start;
  }

  .card-text {
    color: white;
    font-size: 20px;
    position: relative;
    text-align: center;
  }

  .card-title {
    color: white;
    font-size: 40px;
    position: relative;
    text-align: center;
  }

  &:hover .card-body {
    opacity: 0.5;
    cursor: pointer;
  }
`

const jumbotronStyles = css`
  margin-left: 400px;
  width: 250px;
  height: 250px;
  background-color: transparent;
  opacity: 1;
`

const userData = [
  {
    id: 0,
    name: "James Jarrett",
    avatar: `${jamesAv}`,
    excerpt:
      "This is James, Oklahoma State Electrical Engineering Technology graduate, currently working as a software engineer for a startup. James has a passion for making technologies aceesible for all while pushing for edge and emergent technologies to find out more about james checkout his github(link) and linkedin(link) ",
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
      <header css={headerStyles("flex-start")}>The High Council</header>
      <div css={aboutGridStyles}>
        {userData.map(u => (
          <Card key={u.id} css={cardStyles(u.avatar)}>
            <Card.Body>
              <Card.Title>{u.name}</Card.Title>
            </Card.Body>
            <Jumbotron fluid css={jumbotronStyles}>
              <Container>
                <p>{u.excerpt}</p>
              </Container>
            </Jumbotron>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default About
