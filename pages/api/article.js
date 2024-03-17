import { createNewArticle } from "@/lib/articles-utils"

export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body
    const { title, content } = body
    const result = createNewArticle(title, content)
    console.log(result)

    res.status(201).json({
      message: "success",
    })
  }
}
