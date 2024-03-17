import ArticleHeader from "./article-header"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atmoDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function ArticleContent({ article }) {
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
              <div
                className="inline-block rounded-lg overflow-hidden"
                key={alt}
              >
                <Image alt={alt} src={src} width={600} height={300} />
              </div>
            )
          }
          return <p>{item.value}</p>
        })
      }
    },
    code(props) {
      const { className, children } = props
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
    },
  }

  if (article) {
    const imagePath = `/images/articles/${article.slug}/${article.image}`
    return (
      <article className="mx-auto bg-white px-6 py-8 rounded-lg md:mt-8 md:mx-20">
        <ArticleHeader
          title={article.title}
          date={article.date}
          image={imagePath}
        />
        <ReactMarkdown components={customComponents}>
          {article.content}
        </ReactMarkdown>
      </article>
    )
  }
  return <p>Loading...</p>
}
