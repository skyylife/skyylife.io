import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const wrapperStyles = css`
  display: -webkit-flex; /* Safari */
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  align-items: center;
  justify-content: center;
`

const imageStyles = css`
  position: relative;
  background-color: transparent;
  width: 40%;
  height: 40%;
  z-index: 50;
  background-position: center;
  opacity: 1;
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sl-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div css={wrapperStyles}>
      <Img
        css={imageStyles}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Image
