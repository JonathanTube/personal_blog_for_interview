import classes from "./hero.module.css"
import Image from "next/image"

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.png"
          alt="avatar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jonathan</h1>
      <p>
        I blog about web development - especially frontend framewors like React
        and Vue.
      </p>
    </section>
  )
}
