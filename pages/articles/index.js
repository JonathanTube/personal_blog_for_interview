import Head from "next/head"
import AllArticles from "@/components/articles/all-articles"
import { getAllArticles } from "@/lib/db-utils"

export default function AllArticlesPage({ articles }) {
  return (
    <>
      <Head>
        <title>All Articles</title>
        <meta name="description" content="A list of all all articles." />
      </Head>
      <AllArticles articles={articles} />
    </>
  )
}

export async function getStaticProps() {
  const allArticles = await getAllArticles()
  return {
    props: {
      articles: allArticles,
    },
    revalidate: 100,
  }
}
