import { createNewArticle } from "@/lib/db-utils"

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body
    console.log(body)
    const { title, content, createDate } = body
    try {
      const result = createNewArticle(title, content, createDate)
    } catch (err) {
      res.status(500).json({
        message: "Something error occured",
      })
      return
    }
    res.status(201).json({
      message: "success",
    })
  }
}
