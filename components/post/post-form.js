import { useState } from "react"
import Notification from "../ui/notification"

export default function PostForm() {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredContent, setEnteredContent] = useState("")
  const [isShowNotifications, setIsShowNotifications] = useState(false)

  function submitHandler(event) {
    event.preventDefault()
    fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
      }),
    }).then((res) => {
      setIsShowNotifications(true)
    })
  }

  return (
    <div className="px-4 pt-5 md:p-10 md:py-5 md:rounded-lg md:mx-20 md:my-10 md:bg-gray-300">
      <h1 className="font-semibold text-xl text-center md:text-4xl">
        Post a new article
      </h1>
      <form onSubmit={submitHandler}>
        <div className="mt-5">
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
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
            placeholder="Please input markdown content"
            rows={20}
            className="h-10 w-full rounded-sm resize-y p-2 mt-2 min-h-40"
            onChange={(event) => setEnteredContent(event.target.value)}
          />
        </div>
        <div className="text-center">
          <button className="text-white font-bold rounded-lg text-lg mt-5 px-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Submit
          </button>
        </div>
      </form>

      {isShowNotifications && (
        <Notification
          status="success"
          title="success"
          message="post new article successfully."
        />
      )}
    </div>
  )
}
