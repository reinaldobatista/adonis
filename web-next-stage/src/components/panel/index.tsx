import React from 'react'

import { Box, useColorModeValue } from '@chakra-ui/react'

import PageContent from './PageContent'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import Sidebar from './Sidebar'

const Panel: React.FC = ({ children }) => {
  const bg = useColorModeValue('#fff', '#141e28')

  return (
    <Box bg={bg} maxW="100vw" h="100vh">
      <Sidebar />
      <Box>
        <PageHeader />
        <PageContent>{children}</PageContent>
        <PageFooter />
      </Box>
    </Box>
  )
}

export default Panel
