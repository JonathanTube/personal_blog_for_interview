import ArticleItem from "./article-item"

export default function ArticleGrid({ articles }) {
  return (
    <ul className="list-none grid gap-5 content-center md:max-w-[1000px] mx-auto my-0">
      {articles.map((article) => (
        <li key={article.title}>
          <ArticleItem key={article.id} {...article} />
        </li>
      ))}
    </ul>
  )
}
