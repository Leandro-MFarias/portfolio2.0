import { createContext, ReactNode, useContext, useState } from "react";

interface MenuContextProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined)

export function MenuProvider({ children }: { children: ReactNode }) {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)
  if(!context) {
    throw new Error("MenuMobile Error")
  }
  return context
}