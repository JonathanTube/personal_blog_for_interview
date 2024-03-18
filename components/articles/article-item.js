import Link from "next/link"
import Image from "next/image"

export default function ArticleItem({ id, title, content, createDate }) {
  const linkPath = `/articles/${id}`

  return (
    <div className="md:rounded-lg hover:bg-blue-50 md:bg-white">
      <Link href={linkPath}>
        <div className="min-h-36 flex flex-col justify-between h-full py-4 px-5">
          <p className="font-semibold md:text-xl">{title}</p>
          <time className="mt-4 italic block text-right">{createDate}</time>
        </div>
      </Link>
    </div>
  )
}
