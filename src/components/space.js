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

const imageStyles = css`
  background-color: transparent;
  width: calc(100% - 120px);
  height: calc(60% - 60px);
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateZ(60px);
  top: 0;
  right: 0;
`

const Space = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "milky-way.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Img
        css={imageStyles}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </Fragment>
  )
}

export default Space
