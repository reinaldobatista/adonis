import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback
} from 'react'

import { useDisclosure } from '@chakra-ui/react'

interface SidebarContextData {
  collapse: boolean
  toggleCollapse(): void
  isOpen: boolean
  onOpen(): void
  onClose(): void
}

const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData
)

export const SidebarProvider: React.FC = ({ children }) => {
  const [collapse, setCollapse] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const handleResize = () => {
      const inner = window.innerWidth < 768
      if (inner) onClose()
      setCollapse(inner)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [onClose])

  const toggleCollapse = useCallback(() => {
    setCollapse(!collapse)
  }, [collapse, setCollapse])

  return (
    <SidebarContext.Provider
      value={{ collapse, toggleCollapse, isOpen, onOpen, onClose }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = (): SidebarContextData => {
  const context = useContext(SidebarContext)
  return context
}
