import FeaturedArticles from "@/components/home-page/featured-articles"
import AboutMe from "@/components/home-page/about-me"
import { getFeaturedArticles } from "@/lib/articles-utils"
import Head from "next/head"

export default function HomePage({ articles }) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is Jonathan's blog." />
      </Head>

      <AboutMe />

      <FeaturedArticles articles={articles} />
    </>
  )
}

export async function getStaticProps() {
  const featuredArticles = getFeaturedArticles()
  return {
    props: {
      articles: featuredArticles,
    },
    revalidate: 1000,
  }
}
