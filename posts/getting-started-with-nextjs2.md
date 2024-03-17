---
title: "Getting started with NextJs"
date: "2022-11-15"
image: "getting-started-nextjs.jpg"
excerpt: "NextIS is a the React framework for production - it makes buildingfullstack React apps and sites a breeze and ships with built-in SSR."
isFeatured: false
---

```javascript
import PostHeader from "./post-header"
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
export default function PostContent({ post }) {
  const customComponents = {
    p(options) {
      const { node } = options
      const { children } = node
      if (children.length > 0) {
        return children.map((item) => {
          const { tagName, properties } = item
          if (tagName === "img") {
            const { alt, src } = properties
            return (
              <div className={classes.image}>
                <Image alt={alt} src={src} width={600} height={300} />
              </div>
            )
          }
          return <p>{item.value}</p>
        })
      }
    },
    code(options) {
      console.log(options)
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
```
