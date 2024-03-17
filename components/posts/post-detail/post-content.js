import PostHeader from "./post-header"
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atmoDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function PostContent({ post }) {
  const customComponents = {
    p(props) {
      const { node } = props
      const { children } = node
      if (children.length > 0) {
        return children.map((item) => {
          const { tagName, properties } = item
          if (tagName === "img") {
            const { alt, src } = properties
            return (
              <div className={classes.image} key={alt}>
                <Image alt={alt} src={src} width={600} height={300} />
              </div>
            )
          }
          return <p>{item.value}</p>
        })
      }
    },
    code(props) {
      // console.log(props)
      const { className, children } = props
      // console.log(`${className},'-------',${children}`)
      const language = className ? className.split("-")[1] : "unknown"
      return (
        <SyntaxHighlighter
          language={language}
          style={atmoDark}
          wrapLines={true}
        >
          {children}
        </SyntaxHighlighter>
      )
    }
  }

  if (post) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
      <article className={classes.article}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customComponents}>
          {post.content}
        </ReactMarkdown>
      </article>
    )
  }
  return <p>Loading...</p>
}
