import { createContext, useState } from "react"

const menuList = [
  {
    id: 1,
    title: "Article List",
    url: "/articles",
  },
  {
    id: 2,
    title: "Post",
    url: "/post",
  },
]

// define the initial value of context
const MenuToggleContext = createContext({
  menuList: [],
  isMenuOpen: false,
  toggleMenuIsOpen: () => {},
})

export function MenuToggleContextProvider({ children }) {
  // define state
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuIsOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const context = {
    menuList: menuList,
    isMenuOpen: isMenuOpen,
    toggleMenuIsOpen: toggleMenuIsOpenHandler,
  }
  return (
    <MenuToggleContext.Provider value={context}>
      {children}
    </MenuToggleContext.Provider>
  )
}

export default MenuToggleContext
