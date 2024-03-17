import Head from "next/head"
import PostContent from "@/components/posts/post-detail/post-content"
import { getPostData } from "@/lib/posts-utils"
import { createPortal } from "react-dom"

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context

  const { slug } = params

  const postData = await getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 60
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking"
  }
}
