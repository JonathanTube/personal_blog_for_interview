import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"
import { getFeaturedPosts } from "@/lib/posts-utils"
import Head from "next/head"

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is Jonathan's blog." />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  // console.log(allPosts)
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1000
  }
}
