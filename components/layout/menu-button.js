import { useState, useContext } from "react"
import MenuToggleContext from "@/store/menuToggle-context"

export default function Menu() {
  const menuToggleCtx = useContext(MenuToggleContext)
  const { isMenuOpen, toggleMenuIsOpen } = menuToggleCtx

  const toggleMenuHandler = () => {
    toggleMenuIsOpen()
  }

  return (
    <>
      {isMenuOpen ? (
        <img
          src="/xmark-solid.svg"
          alt="icon"
          className="w-5 md:hidden"
          onClick={toggleMenuIsOpen}
        />
      ) : (
        <img
          src="/bars-solid.svg"
          alt="icon"
          className="w-5 md:hidden"
          onClick={toggleMenuIsOpen}
        />
      )}
    </>
  )
}
