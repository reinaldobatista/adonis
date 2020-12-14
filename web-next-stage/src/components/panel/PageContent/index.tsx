import React from 'react'

import { Box, Flex } from '@chakra-ui/react'

import { useSidebar } from '~/contexts/sidebar'

function PageContent({ children }) {
  const { collapse } = useSidebar()

  return <Flex direction="column" paddingLeft={collapse ? 0 : '300px'}>{children}</Flex>
}

export default PageContent
