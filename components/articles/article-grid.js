import ArticleItem from "./article-item"

export default function ArticleGrid({ articles }) {
  return (
    <ul className="list-none grid content-center mx-auto my-0 md:max-w-[1000px] md:gap-5">
      {articles.map((article, index) => (
        <li key={article.id}>
          <div className="bg-gray-200 w-full h-1 md:hidden" />
          <ArticleItem {...article} />
        </li>
      ))}
    </ul>
  )
}
