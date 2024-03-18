import ArticleGrid from "../articles/article-grid"

export default function FeaturedArticles({ articles }) {
  return (
    <section>
      <h2 className="text-center text-lg py-4 font-bold text-gray-800 md:text-5xl md:py-8">
        Latest 10 Articles
      </h2>
      <ArticleGrid articles={articles} />
    </section>
  )
}
