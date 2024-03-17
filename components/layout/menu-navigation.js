import MenuToggleContext from "@/store/menuToggle-context"
import { useContext } from "react"
import Link from "next/link"

export default function MenuNavigation() {
  const menuToggleCtx = useContext(MenuToggleContext)
  const { isMenuOpen, menuList, toggleMenuIsOpen } = menuToggleCtx

  return (
    <>
      {isMenuOpen && (
        <nav
          className="pt-4 bg-gray-800 opacity-90 absolute w-full h-full md:hidden"
          onClick={toggleMenuIsOpen}
        >
          <ul className="list-none text-white text-lg">
            {menuList.map((menu) => (
              <li key={menu.id} className="pl-5 py-2">
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
