import Head from "next/head"
import PostForm from "@/components/post/post-form"

export default function PostPage() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me message." />
      </Head>
      <PostForm />
    </>
  )
}
