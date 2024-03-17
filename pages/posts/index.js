import AllPosts from "@/components/posts/all-posts"
import { getAllPosts } from "@/lib/posts-utils"
export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all my sklled program languages."
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts
    },
    revalidate: 100
  }
}
