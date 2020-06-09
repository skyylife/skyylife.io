import React, { Fragment } from "react"
import { jsx, css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Parallax } from "react-parallax"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const uiContainerStyles = css`
  display: grid;
  grid-template-rows: 50px calc(100% - 50px);
  grid-template-columns: 50px 100px 300px;
  grid-template-areas: "header header header";
  grid-gap: 3px;
`

const imageStyles = css`
  position: absolute;
  background-color: transparent;
  width: 40%;
  height: 40%;
  z-index: 50;
`

const backgroundStyles = css`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: 0.2;
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
      spaceImage: file(relativePath: { eq: "milky-way.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div css={uiContainerStyles}>
      <Img
        css={backgroundStyles}
        fluid={data.spaceImage.childImageSharp.fluid}
      />
      <Img
        css={imageStyles}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Image
