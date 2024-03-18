import { createPortal } from "react-dom"
import NotificationContext from "@/store/notification-context"
import { useContext, useEffect } from "react"

const Notification = () => {
  const notificationCtx = useContext(NotificationContext)
  const { status, title, message, hideNotification } = notificationCtx

  useEffect(() => {
    const timer = setTimeout(() => {
      hideNotification()
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [status])

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

  const activeClasses = `fixed w-full bottom-0 box-border py-4 px-5 md:px-48 ${statusClasses}`

  if (status === "") return null

  return (
    <div className={activeClasses}>
      <h1 className="text-left text-white text-xl font-bold">{title}</h1>
      <p className="text-right text-xl text-white">{message}</p>
    </div>
  )
}

export default Notification
