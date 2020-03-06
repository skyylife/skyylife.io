import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Card } from "react-bootstrap"

const Container = styled.div`
  margin: 0;
  display: flex;
  column-count: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
`

const CardStyles = css`
  display: flex;
  border: 2px solid red;
  flex-direction: row;
  margin: 0;
  padding: 0.5em;
  width: auto;
  background-color: transparent;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  .card-body {
    justify-content: flex-start;
  }
`

const headerStyles = css`
  font-size: 200%;
`
const userData = [
  {
    id: 0,
    name: "James Jarrett",
    avatar: "",
    excerpt: "This is James, the CEO",
  },
  {
    id: 1,
    name: "Aaron Shepherd",
    avatar: "",
    excerpt: "This is Aaron, the CTO",
  },

  {
    id: 2,
    name: "Dymon Johnson",
    avatar: "",
    excerpt: "This is Dymon, the CDO",
  },
  {
    id: 3,
    name: "Quincey Thomas",
    avatar: "",
    excerpt: "This is Quincey, the CPO",
  },

  {
    id: 4,
    name: "Sharrone Berry-Davis",
    avatar: "",
    excerpt: "This is Sharrone, the CFO",
  },
]

const About = () => {
  return (
    <Container>
      <header css={headerStyles}>Mission Statement</header>
      <p>Our Mission is ...</p>
      <header css={headerStyles}>The High Council</header>

      {userData.map(u => (
        <Card key={u.id} css={CardStyles}>
          <Card.Title>{u.name}</Card.Title>
          {/* <Card.Img>{u.avatar}</Card.Img> */}
          <Card.Body>{u.excerpt}</Card.Body>
        </Card>
      ))}
    </Container>
  )
}

export default About
