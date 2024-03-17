import Link from "next/link"
import Image from "next/image"

export default function ArticleItem({ title, image, excerpt, date, slug }) {
  console.log(title, image, excerpt)
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const imagePath = `/images/articles/${slug}/${image}`

  const linkPath = `/articles/${slug}`

  return (
    <div className="bg-white md:rounded-lg">
      <Link href={linkPath}>
        <div className="grid grid-cols-[30%_70%] gap-2 p-2">
          <div className="relative rounded-md overflow-hidden h-28 md:h-48">
            <Image src={imagePath} alt={title} fill />
          </div>
          <div className="flex flex-col justify-between h-full">
            <p className="font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden md:text-xl">
              {title}
            </p>
            <time className="mt-4 italic block">{formattedDate}</time>
          </div>
        </div>
      </Link>
    </div>
  )
}
