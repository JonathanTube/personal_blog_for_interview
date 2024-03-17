import Image from "next/image"

export default function AboutMe() {
  return (
    <section className="bg-blue-100 py-8 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden md:w-72 md:h-72">
        <Image
          src="/images/site/avatar.png"
          alt="avatar"
          width={300}
          height={300}
        />
      </div>
      <h1 className="text-2xl pt-5">Hi, I&apos;m Jonathan</h1>
      <p className="w-full px-6 text-center pt-5 text-lg md:w-1/2">
        My blog about fullstack web development - especially frontend frameworks
        like React and Nextjs and backend development such as java.
      </p>
    </section>
  )
}
