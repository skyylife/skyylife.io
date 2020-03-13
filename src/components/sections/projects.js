import React from "react"
import { jsx, css } from "@emotion/core"
import { Card } from "react-bootstrap/"
import logo from "../../images/sl-logo-short.png"
import { headerStyles } from "../../styles/shared-styles"

const projectGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  grid-auto-rows: minmax(200px, 300px);
  grid-gap: 10px;
  flex: 1 0 auto;
  margin-top: 1rem;
`

const cardStyles = url => css`
  display: flex;
  border: 2px solid lightgrey;
  border-radius: 25px;
  flex-direction: row;
  margin: 0.5em;
  padding: 1em;
  width: auto;
  background-image: url(${url});
  background-position: center center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-color: transparent;

  .card-body {
    border-radius: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #131821;
  }

  .card-text {
    color: white;
    font-size: 20px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .card-link {
    color: white;
    font-size: 20px;
    position: relative;

    text-align: center;
  }

  &:hover .card-body {
    opacity: 1;
  }
`

const projectData = [
  {
    id: 0,
    name: "Skyy Life Website",
    link: "https://github.com/skyylife/skyylife.io",
    img: `${logo}`,
  },
]

const Projects = () => {
  return (
    <div>
      <header css={headerStyles("flex-start")}>Current Projects</header>
      <div css={projectGridStyles}>
        {projectData.map(d => (
          <Card key={d.id} css={cardStyles(d.img)}>
            <a href={d.link} target="_blank">
              <Card.Body>
                <Card.Text>{d.name}</Card.Text>
              </Card.Body>
            </a>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
