import React, { useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'
import { FaMoon } from 'react-icons/fa'

import {
  Box,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import { useSidebar } from '../../../contexts/sidebar'

const PageHeader: React.FC = () => {
  const { collapse, toggleCollapse, onOpen } = useSidebar()
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('#174a66', '#1e2846')

  const isMD = useBreakpointValue({ base: false, md: true })

  const handleCollapse = useCallback(() => {
    isMD ? toggleCollapse() : onOpen()
  }, [isMD, toggleCollapse, onOpen])

  return (
    <Box
      d="flex"
      alignItems="center"
      maxW="100vw"
      h="60px"
      paddingLeft={collapse ? 0 : '300px'}
      bg={bg}
      transition="padding 400ms"
    >
      <IconButton
        aria-label="Toggle Collapse"
        icon={<AiOutlineMenu />}
        onClick={handleCollapse}
        marginLeft="20px"
        bg={bg}
        _hover={{
          color: 'black',
          bg: bg
        }}
        _focus={{ boxShadow: 'rgb(150, 100, 250) 0px 0px 4px 0px' }}
      />

      {/* <IconButton
        aria-label="Toggle Color Theme"
        icon={colorMode === 'dark' ? <BiSun /> : <FaMoon />}
        onClick={toggleColorMode}
        marginLeft="20px"
        borderRadius="50%"
        _focus={{ boxShadow: 'rgb(150, 100, 250) 0px 0px 4px 0px' }}
      /> */}
    </Box>
  )
}

export default PageHeader
