import React, { Fragment } from "react"
import { jsx, css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Tilt from "react-parallax-tilt"
import Background from "../components/background"

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
  width: 90%;
  height: 90%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateZ(60px);
`

const parallax = css`
  @include background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  transform-style: preserve-3d;
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sl-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <div>
        <Tilt
          perspective={800}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1}
          css={parallax}
        >
          <Img
            css={imageStyles}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </Tilt>
      </div>
    </Fragment>
  )
}

export default Image
