import React from 'react'

import {
  Flex,
  Heading,
  Image,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'

import NextImage from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'

import LogoImg from '~/assets/logo.svg'

import Nav from '~/components/Nav'

import { useSidebar } from '~/contexts/sidebar'



const Sidebar = () => {
  const { collapse, isOpen, onClose } = useSidebar()
  const isMD = useBreakpointValue({ base: false, md: true })

  const bg = useColorModeValue('#174a66', '#1e2846')
  const colorTextLogo = useColorModeValue('#506482', '#e6e6e6')
  

  return (
      <AnimatePresence>
        {isMD && !collapse ? (
          <motion.nav
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            exit={{ opacity: 0, x: -300 }}
          >
            <Flex
              flexDirection="column"
              position="fixed"
              w={collapse ? 0 : '300px'}
              minH="100vh"
              bg={bg}
              overflow="hidden"
              transition="width 400ms"
            >
              <Flex
                alignItems="center"
                align="center"
                justify="center"
                minH="60px"
              >
                {/* <Text
                  marginLeft="20px"
                  fontSize="22px"
                  letterSpacing="0.15em"
                  fontWeight="600"
                  color={colorTextLogo}
                >
                Salt
                </Text> */}
                <Image
                  src="/sagatech-salt-superpositivo-name.png"
                  h="50px"
                  w="auto"
                  justify="center"
                />
              </Flex>
              <Box h="calc(100vh - 55px)" w="100%">
                <Nav />
              </Box>
            </Flex>
          </motion.nav>
        ) : (
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent bg={bg}>
                <Box
                  display="flex"
                  alignItems="center"
                  minH="60px"
                  borderBottom="1px"
                >
                  <Text
                    marginLeft="20px"
                    fontSize="22px"
                    letterSpacing="0.15em"
                    fontWeight="600"
                    color={colorTextLogo}
                  >
                    Salt
                  </Text>
                </Box>
                <Box h="calc(100vh - 55px)" w="100%">
                  <Nav />
                </Box>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        )}
      </AnimatePresence>
    
  )
}

export default Sidebar
