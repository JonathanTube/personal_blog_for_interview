import { createContext, useState } from "react"

const NotificationContext = createContext({
  status: "",
  title: "",
  message: "",
  showNotification: (status, title, message) => {},
  hideNotification: () => {},
})

export function NotificationContextProvider({ children }) {
  const [isShow, setIsShow] = useState(false)
  const [statusTxt, setStatusTxt] = useState("")
  const [titleTxt, setTitleTxt] = useState("")
  const [messageTxt, setMessageTxt] = useState("")

  const showNotificationHandler = (status, title, message) => {
    setStatusTxt(status)
    setTitleTxt(title)
    setMessageTxt(message)
  }

  const hideNotificationHandler = () => {
    setStatusTxt("")
    setTitleTxt("")
    setMessageTxt("")
  }

  const context = {
    status: statusTxt,
    title: titleTxt,
    message: messageTxt,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }
  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
