import Head from "next/head"
import PostForm from "@/components/post/post-form"

export default function PostPage() {
  return (
    <>
      <Head>
        <title>Post a new article</title>
        <meta name="description" content="Post a new article." />
      </Head>

      <PostForm />
    </>
  )
}
