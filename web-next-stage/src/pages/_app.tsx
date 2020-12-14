import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'

import { theme } from '~/styles/themes'

import Panel from '../components/panel'
import AppProvider from '../contexts'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Panel>
          <Component {...pageProps} />
        </Panel>
      </ChakraProvider>
    </AppProvider>
  )
}

export default App
