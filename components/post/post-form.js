import { useState, useContext, useRef } from "react"
import NotificationContext from "@/store/notification-context"

export default function PostForm() {
  const formRef = useRef(null)
  const notificationCtx = useContext(NotificationContext)
  const { showNotification } = notificationCtx

  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredContent, setEnteredContent] = useState("")
  const now = new Date().toISOString().split("T")[0]
  const [enteredCreateDate, setEnteredCreateDate] = useState(now)
  const [enteredShowInHome, setEnteredShowInHome] = useState(true)

  function submitHandler(event) {
    event.preventDefault()

    const title = document.getElementById("title").value
    if (title.trim() === "") {
      showNotification("error", "Error", "The title shouldn't be empty!")
      return
    }
    const content = document.getElementById("content").value
    const createDate = document.getElementById("createDate").value
    fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        createDate,
      }),
    }).then((res) => {
      showNotification(
        "success",
        "Success",
        "Publish a new article successfully!"
      )
      formRef.current.reset()
    })
  }

  const changeContentHandler = (content) => {
    setEnteredContent(content)
  }

  return (
    <div className="px-4 pt-5 md:p-10 md:py-5 md:rounded-lg md:mx-20 md:my-10 md:bg-gray-300">
      <h1 className="font-semibold text-xl text-center md:text-4xl">
        Post a new article
      </h1>
      <form ref={formRef} onSubmit={submitHandler}>
        <div className="mt-5">
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            maxLength={200}
            placeholder="Please input the article title"
            required
            className="h-10 w-full rounded-sm pl-2 mt-2"
            onChange={(event) => setEnteredTitle(event.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="text-lg">
            Content
          </label>
          <textarea
            id="content"
            required
            placeholder="Please input some markdown content"
            rows={20}
            className="h-10 w-full rounded-sm resize-y p-2 mt-2 min-h-40"
            onChange={(event) => setEnteredContent(event.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="createDate" className="text-lg">
            Publish Date
          </label>
          <input
            type="date"
            id="createDate"
            required
            defaultValue={enteredCreateDate}
            placeholder="Please input publish date"
            className="h-10 w-full rounded-sm p-2 mt-2"
            onChange={(event) => setEnteredCreateDate(event.target.value)}
          />
        </div>

        <div className="text-center">
          <button className="text-white font-bold rounded-lg text-lg mt-5 px-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
