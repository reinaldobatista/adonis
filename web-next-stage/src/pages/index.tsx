import { Flex } from '@chakra-ui/react'

import Head from 'next/head'

export default function Home() {
  return (
    <Flex>
      <Head>
        <title>Salt</title>
      </Head>

      <h1>Hello world</h1>
    </Flex>
  )
}
