import { Box, Container,  Table, Tbody, Td, Th, Thead, Tr,Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'

import Button from '~/components/Button'

import Flex from '~/components/Flex'

import { BiBasket } from 'react-icons/bi'

import { IoHome } from 'react-icons/io5'

function Requisition() {
  const [requisitions, setRequisitions] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
      const res = await fetch('http://127.0.0.1:8080/api/purchase-module/requisition')
      const response = await res.json()

      setRequisitions(response)
      setLoading(false)
  }

  useEffect(() => {
      if (loading) {
          setRequisitions([])
          fetchData()
      }
  },[loading])
  return(
        <>
            <Flex h="3vh" margin="20px 20px">
                <Breadcrumb spacing={2} separator=">">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" fontSize="xs" alignItems="center" d="flex"><Icon as={IoHome}/></BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="/page/requisition" fontSize="xs" alignItems="center" d="flex" >
                            <Icon as={BiBasket} mr={2} /> Requisição de Compras
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                </Breadcrumb>
            </Flex>
        
       
            
            <Flex margin="20px 20px" align="center" >
                <Flex bg="#174a66"  w="full" h="5vh" alignItems="center">
                    <Text marginLeft="8px"> Requisição de Compras </Text>
                </Flex>
                <Button margin="20px 10px"  onClick={() => setLoading(true)} colorScheme="blue" >Atualizar</Button>
                <Table variant="simple">
                    <Thead bg="#ff9000">
                        <Tr>
                        <Th>Codigo</Th>
                        <Th>Data</Th>
                        <Th>Valor</Th>
                        <Th>Numero da requisição</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                            {requisitions.map(requisition => (
                            <Tr key={requisition.id}>
                            <Td >{requisition.id}</Td>
                            <Td>{requisition.data}</Td>
                            <Td>{requisition.ValorTotal}</Td>
                            <Td>{requisition.num_requisicao}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Flex>
           
        </>
  )
}

export default Requisition
