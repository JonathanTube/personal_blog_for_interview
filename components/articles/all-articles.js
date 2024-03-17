import ArticleGrid from "./article-grid"

export default function AllArticles({ articles }) {
  return (
    <section className="md:mx-80">
      <h1 className="font-bold py-4 text-gray-800 text-center md:text-5xl md:py-8">
        All Articles
      </h1>
      <ArticleGrid articles={articles} />
    </section>
  )
}
