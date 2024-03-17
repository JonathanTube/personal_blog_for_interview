import Image from "next/image"

export default function ArticleHeader({ title, date, image }) {
  return (
    <header className="border-b-gray-700 border-solid border-b-2 pb-4 mb-4 md:pb-8 md:mb-8">
      <h1 className="text-2xl font-bold text-gray-600 md:text-5xl">{title}</h1>
      <h2 className="text-right italic mt-5">{date}</h2>
    </header>
  )
}
