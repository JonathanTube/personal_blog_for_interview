import classes from "./post-item.module.css"
import Link from "next/link"
import Image from "next/image"

export default function PostsItem({ title, image, excerpt, date, slug }) {
  console.log(title, image, excerpt)
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  const imagePath = `/images/posts/${slug}/${image}`

  const linkPath = `/posts/${slug}`

  return (
    <div className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} fill />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </div>
  )
}
