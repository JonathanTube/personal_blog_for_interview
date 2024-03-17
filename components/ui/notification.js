import { createPortal } from "react-dom"
import classes from "./notification.module.css"

const Notification = ({ title, message, status }) => {
  let statusClasses = ""

  if (status === "success") {
    statusClasses = classes.success
  }

  if (status === "error") {
    statusClasses = classes.error
  }

  if (status === "pending") {
    statusClasses = classes.pending
  }

  const activeClasses = `${classes.notification} ${statusClasses}`

  return createPortal(
    <div className={activeClasses}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>,
    document.getElementById("notification-block")
  )
}

export default Notification
