import { useState } from "react"
import Notification from "../ui/notification"
import classes from "./contact-form.module.css"

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredName, setEnteredName] = useState("")
  const [enteredMessage, setEnteredMessage] = useState("")
  const [isShowNotifications, setIsShowNotifications] = useState(false)

  function submitHandler(event) {
    event.preventDefault()
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value
      })
    }).then((res) => {
      setIsShowNotifications(true)
    })
  }

  return (
    <div className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.row}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="name">You Name</label>
            <input
              type="text"
              id="name"
              required
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            required
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>
        <div className={classes.button}>
          <button>Submit</button>
        </div>
      </form>

      {isShowNotifications && (
        <Notification
          status="success"
          title="success"
          message="add message successfully."
        />
      )}
    </div>
  )
}
