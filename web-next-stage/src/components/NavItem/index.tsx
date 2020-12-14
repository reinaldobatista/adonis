import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import {
  InputProps,
  Input as InputChakra,
  Box,
  Icon,
  Spacer,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'

interface InputAttr extends InputProps {
  icon?: React.ElementType
  children?: React.ReactNode
}

function NavItem({ children, title = '', icon, ...rest }: InputAttr) {
  const [open, setOpen] = useState(false)

  const colorNavText = useColorModeValue('#b8c7ce', '#8aa4af')
  const colorNavTextChildren = useColorModeValue('#8aa4af', '#8aa4af')
  const colorNavTextHover = useColorModeValue('#fff', '#6946af')
  const bgNavText = useColorModeValue('transparent', 'transparent')
  const bgNavTextHover = useColorModeValue('#15435d', '#8aa4af')

  const handleToggleOpen = () => {
    if (children) setOpen(!open)
  }

  return (
    <Box
      d="flex"
      flexDirection="column"
      color={colorNavText}
      bg={bgNavText}
      _hover={{
        color: colorNavTextHover,
        bg: bgNavTextHover
      }}
      {...rest}
    >
      <Box
        d="flex"
        alignItems="center"
        h="40px"
        marginLeft="20px"
        borderRadius="8px"
        color={colorNavText}
        cursor="pointer"
        _hover={{
          color: colorNavTextHover
        }}
        transition="transform 400ms, background-color 200ms, color 200ms"
        onClick={handleToggleOpen}
      >
        <Icon as={icon} fontSize="18px" />
        <Text
          marginLeft="12px"
          d="flex"
          alignItems="center"
          h="100%"
          fontWeight="400"
          fontSize="15px"
          lineHeight="1.25rem"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {title}
        </Text>
        {!!children && (
          <>
            <Spacer />
            <Icon
              fontSize="18px"
              h="100%"
              transform={open ? 'rotate(-90deg)' : 'rotate(0deg)'}
              transition="transform 400ms"
            >
              <FaChevronLeft />
            </Icon>
          </>
        )}
      </Box>

      <AnimatePresence>
        {!!children && open && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0, x: -30 }}
          >
            <Box bg="#123144" w="100%">
              {children}
            </Box>
          </motion.nav>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default NavItem
