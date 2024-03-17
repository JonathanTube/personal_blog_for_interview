import { MenuToggleContextProvider } from "@/store/menuToggle-context"
import MainNavigation from "./main-navigation"
import MenuNavigation from "./menu-navigation"

export default function Layout({ children }) {
  return (
    <>
      <MenuToggleContextProvider>
        <MainNavigation />
        <MenuNavigation />
        <main className="pb-20">{children}</main>
      </MenuToggleContextProvider>
    </>
  )
}
