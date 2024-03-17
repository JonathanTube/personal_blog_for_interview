import matter from "gray-matter"
import fs from "fs"
import path from "path"

const articlesDirectory = path.join(process.cwd(), "articles")

export function createNewArticle(title, content) {
  const file = `${articlesDirectory}/${title}.md`
  const newTitle = title.replace(/\s+/g, "-").replace(/--*/g, "-")
  const date = new Date().toISOString().split("T")[0]
  const result = `---
title: "${newTitle}"
date: "${date}"
isFeatured: false
---
${content}
`
  const res = fs.writeFile(file, result, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
  return res
}

export function getArticleData(articleIdentifier) {
  const articleSlug = articleIdentifier.replace(/\.md$/, "")
  const filePath = path.join(articlesDirectory, `${articleSlug}.md`)
  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)

  const articleData = {
    slug: articleSlug,
    ...data,
    content,
  }

  return articleData
}

export function getAllArticles() {
  const articleFiles = fs.readdirSync(articlesDirectory)
  const articles = articleFiles.map((fileName) => getArticleData(fileName))
  const sortedArticles = articles.sort((articleA, articleB) =>
    articleA.date > articleB.date ? -1 : 1
  )
  return sortedArticles
}

export function getFeaturedArticles() {
  const allArticles = getAllArticles()
  const allFeaturedArticles = allArticles.filter(
    (article) => article.isFeatured
  )
  return allFeaturedArticles
}
