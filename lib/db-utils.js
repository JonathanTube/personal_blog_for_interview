import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

const dbPath = path.join(process.cwd(), "db", "index.json")

export function createNewArticle(
  title,
  content,
  createDate,
  showInHome = false
) {
  const currentArticleList = getAllArticles()
  const newArticle = {
    id: uuidv4(),
    title,
    content,
    createDate,
    showInHome,
  }
  const addedArticleList = currentArticleList.concat(newArticle)

  const jsonData = JSON.stringify(addedArticleList)

  const res = fs.writeFile(dbPath, jsonData, (err) => {
    if (err) return err
  })
  return res
}

export function getArticleData(id) {
  return getAllArticles().filter((article) => article.id == id)
}

export function getAllArticles() {
  const result = fs.readFileSync(dbPath)
  return JSON.parse(result)
}

export function getFeaturedArticles() {
  const allArticles = getAllArticles()
  const allFeaturedArticles = allArticles.filter(
    (article) => article.showInHome
  )
  return allFeaturedArticles
}
