/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React, { useState } from "react"

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: calc(100% - 120px);
  background-color: transparent;
`

const formStyles = css`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 25px;

  color: white;
  padding: 1em;
`

const textareaStyles = css`
  width: 500px;
  height: 100px;
`

const ContactForm = ({ props }) => {
  const [status, setStatus] = useState("")

  const submitForm = e => {
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("Error")
      }
    }
    xhr.send(data)
  }

  return (
    <div css={wrapperStyles}>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/xnqvqbvl"
        method="POST"
        css={formStyles}
      >
        <label htmlFor="email" id="email">
          Email:
        </label>
        <input type="email" name="email" />
        <label htmlFor="message" id="message">
          Message:
        </label>
        <textarea name="message" css={textareaStyles}></textarea>
        <label htmlFor="number" id="number">
          Number
        </label>
        <input type="text" name="number" style={{ marginBottom: "1em" }} />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  )
}

export default ContactForm
