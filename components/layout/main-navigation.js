import Logo from "./logo"
import Link from "next/link"
import Menu from "./menu-button"
import { useContext } from "react"
import MenuToggleContext from "@/store/menuToggle-context"

export default function MainNavigation() {
  const menuToggleCtx = useContext(MenuToggleContext)
  const { menuList } = menuToggleCtx
  return (
    <>
      <header className="fixed top-0 w-full px-4 h-20 box-border font-bold flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500 md:px-20">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:block">
          <ul className="list-none font-bold flex gap-8 text-white md:text-2xl">
            {menuList.map((menu) => (
              <li
                key={menu.id}
                className="rounded p-2 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500"
              >
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Menu />
      </header>
      <div className="w-full h-20" />
    </>
  )
}
