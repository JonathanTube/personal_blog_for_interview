import FeaturedArticles from "@/components/home/featured-articles"
import AboutMe from "@/components/home/about-me"
import { getLatest10Articles } from "@/lib/db-utils"
import Head from "next/head"

export default function HomePage({ articles }) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta name="description" content="This is Jonathan's blog." />
      </Head>

      <AboutMe />

      <FeaturedArticles articles={articles} />
    </>
  )
}

export async function getStaticProps() {
  const latest10Articles = getLatest10Articles()
  return {
    props: {
      articles: latest10Articles,
    },
    revalidate: 1000,
  }
}
