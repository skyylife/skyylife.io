import React from "react"
import { jsx, css } from "@emotion/core"
import { headerStyles } from "../../styles/shared-styles"
import ContactForm from "../form"

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const Contact = () => {
  return (
    <div css={wrapperStyles}>
      <header css={headerStyles("flex-end")}>Contact Us</header>
      <ContactForm />
    </div>
  )
}

export default Contact
