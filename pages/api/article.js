import { createNewArticle } from "@/lib/db-utils"

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body
    const { title, content, createDate, showInHome } = body
    const result = createNewArticle(title, content, createDate, showInHome)
    console.log(result)

    res.status(201).json({
      message: "success",
    })
  }
}
