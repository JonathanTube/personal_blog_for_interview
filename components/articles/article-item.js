import Link from "next/link"
import Image from "next/image"

export default function ArticleItem({ id, title, content, createDate }) {
  const linkPath = `/articles/${id}`

  return (
    <div className="bg-white md:rounded-lg">
      <Link href={linkPath}>
        <div className="flex flex-col justify-between h-full py-4 px-5">
          <p className="font-semibold overflow-ellipsis whitespace-nowrap overflow-hidden md:text-xl">
            {title}
          </p>
          <time className="mt-4 italic block text-right">{createDate}</time>
        </div>
      </Link>
    </div>
  )
}
