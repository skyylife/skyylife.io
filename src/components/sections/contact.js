import React from "react"
import { jsx, css } from "@emotion/core"
import { headerStyles } from "../../styles/shared-styles"
import ContactForm from "../form"
import { Element } from "react-scroll"

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const Contact = () => {
  return (
    <Element id="contact" name="contact" className="element">
    <div name="contact" css={wrapperStyles}>
      <header css={headerStyles("flex-start")}>Contact Us</header>
      <ContactForm />
    </div>
    </Element>
  )
}

export default Contact
