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
      spaceImage: file(relativePath: { eq: "space-stars.jpg" }) {
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
      >
        <Image />
      </BackgroundImage>
    </>
  )
}

export default Masthead
