/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"

const mastheadStyles = css`
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.1;
`

const Masthead = () => {
  const data = useStaticQuery(graphql`
    query {
      spaceImage: file(relativePath: { eq: "shooting-stars.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <BackgroundImage
        fluid={data.spaceImage.childImageSharp.fluid}
        fadeIn
        css={mastheadStyles}
        href="https://www.freepik.com/photos/background'>Background photo created by kjpargeter - www.freepik.com"
      >
        <Image />
      </BackgroundImage>
    </>
  )
}

export default Masthead
