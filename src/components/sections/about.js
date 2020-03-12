import React from "react"
import { jsx, css } from "@emotion/core"
import { Card } from "react-bootstrap"

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const aboutGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  grid-auto-rows: minmax(200px, 300px);
  grid-gap: 10px;
  flex: 1 0 auto;
  margin-top: 1rem;
`

const cardStyles = css`
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
    <div css={wrapperStyles}>
      <header css={headerStyles}>Mission Statement</header>
      <p>Our Mission is ...</p>
      <header css={headerStyles}>The High Council</header>
      <div css={aboutGridStyles}>
        {userData.map(u => (
          <Card key={u.id} css={CardStyles}>
            <Card.Title>{u.name}</Card.Title>
            {/* <Card.Img>{u.avatar}</Card.Img> */}
            <Card.Body>{u.excerpt}</Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default About
