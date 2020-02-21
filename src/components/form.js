import React, { useState } from "react"

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
    <form
      onSubmit={submitForm}
      action="https://formspree.io/xnqvqbvl"
      method="POST"
    >
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <input type="text" name="message" />
      <label>Number</label>
      <input type="text" name="number" />
      {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  )
}

export default ContactForm
