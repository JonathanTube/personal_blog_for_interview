import { createPortal } from "react-dom"

const Notification = ({ title, message, status }) => {
  let statusClasses = ""

  if (status === "success") {
    statusClasses = "bg-green-600"
  }

  if (status === "error") {
    statusClasses = "bg-red-600"
  }

  if (status === "pending") {
    statusClasses = "bg-gray-600"
  }

  const activeClasses = `box-border py-4 px-5 md:px-48 ${statusClasses}`

  return createPortal(
    <div className={activeClasses}>
      <h1 className="text-left text-white text-xl font-bold">{title}</h1>
      <p className="text-right text-xl text-white">{message}</p>
    </div>,
    document.getElementById("notification-block")
  )
}

export default Notification
