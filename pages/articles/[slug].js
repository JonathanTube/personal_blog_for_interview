import Head from "next/head"
import ArticleContent from "@/components/articles/article-detail/article-content"
import { getArticleData } from "@/lib/db-utils"
import { createPortal } from "react-dom"
import { useRouter } from "next/navigation"

export default function ArticlePage({ article }) {
  console.log(article.content)
  const router = useRouter()
  const goBackHandler = () => {
    router.back()
  }
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.title} />
      </Head>
      <button
        onClick={goBackHandler}
        type="button"
        className="fixed right-5 bottom-5 rounded-full px-3 py-2 my-2 mx-2 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:ml-20"
      >
        Go Back
      </button>
      <ArticleContent article={article} />
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context

  const { slug } = params

  const articleData = getArticleData(slug)

  if (articleData.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article: articleData[0],
    },
    revalidate: 60,
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}
