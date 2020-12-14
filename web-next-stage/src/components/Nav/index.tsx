import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiBasket } from 'react-icons/bi'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SiCashapp } from 'react-icons/si'

import { Box } from '@chakra-ui/react'

import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'

import NavItem from '../NavItem'

const Nav = () => {
  const router = useRouter()

  return (
    <Box w="100%">
      <NavItem icon={AiOutlineShoppingCart} title="Compras">
        <NavItem
          icon={BiBasket}
          title="Requisição de Compra"
          onClick={() => router.push('/panel/requisition')}
        />
        <NavItem
          icon={SiCashapp}
          title="Analise de Cotação"
          onClick={() => router.push('/panel/analysis')}
        />
      </NavItem>
      {/* <NavItem icon={FaChevronRight} title="Item 3"></NavItem>
      <NavItem icon={FaChevronRight} title="Item 4"></NavItem>
      <NavItem icon={FaChevronRight} title="Item 5">
        <NavItem icon={FaChevronRight} title="Item 6"></NavItem>
        <NavItem icon={FaChevronRight} title="Item 7"></NavItem>
        <NavItem icon={FaChevronRight} title="Item 8">
          <NavItem icon={FaChevronRight} title="Item 9">
            <NavItem icon={FaChevronRight} title="Item 10"></NavItem>
            <NavItem icon={FaChevronRight} title="Item 11"></NavItem>
            <NavItem icon={FaChevronRight} title="Item 12"></NavItem>
          </NavItem>
          <NavItem icon={FaChevronRight} title="Item 13"></NavItem>
        </NavItem>
      </NavItem>
      <NavItem icon={FaChevronRight} title="Item 14"></NavItem>
      <NavItem icon={FaChevronRight} title="Item 15"></NavItem> */}
    </Box>
  )
}

export default Nav
