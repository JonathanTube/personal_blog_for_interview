import { MenuToggleContextProvider } from "@/store/menuToggle-context"
import { NotificationContextProvider } from "@/store/notification-context"
import Notification from "../ui/notification"
import MainNavigation from "./main-navigation"
import MenuNavigation from "./menu-navigation"

export default function Layout({ children }) {
  return (
    <>
      <MenuToggleContextProvider>
        <MainNavigation />
        <MenuNavigation />
        <NotificationContextProvider>
          <Notification />
          <main className="pb-20">{children}</main>
        </NotificationContextProvider>
      </MenuToggleContextProvider>
    </>
  )
}
