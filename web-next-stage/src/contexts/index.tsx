import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { SidebarProvider } from './sidebar'

const AppProvider: React.FC = ({ children }) => (
  <ChakraProvider>
    <SidebarProvider>{children}</SidebarProvider>
  </ChakraProvider>
)

export default AppProvider
