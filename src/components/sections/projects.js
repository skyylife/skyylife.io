import React from "react"
import { jsx, css } from "@emotion/core"
import { Card } from "react-bootstrap/"
import WebIcon from "mdi-react/WebIcon"

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const projectGridStyles = css`
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
`

const headerStyles = css`
  font-size: 200%;
`

const projectData = [
  {
    id: 0,
    name: "Skyy Life Website",
    icon: "",
    link: "https://github.com/skyylife/skyylife.io",
  },
]

const Projects = () => {
  return (
    <div wrapperStyles>
      <header css={headerStyles}>Current Projects</header>
      <div css={projectGridStyles}>
        {projectData.map(d => (
          <Card key={d.id} css={cardStyles}>
            <Card.Title>{d.name}</Card.Title>
            <Card.Link href={d.link}>{d.link}</Card.Link>
            <WebIcon />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
