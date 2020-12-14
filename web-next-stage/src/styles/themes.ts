import { extendTheme } from '@chakra-ui/react'

import { shade } from 'polished'

const theme = extendTheme({
  fonts: {
    body: 'Roboto Slab, serif',
    heading: 'Roboto Slab, serif'
  },

  colors: {
    orange_primary: {
      500: '#ff9000',
      700: shade(0.2, '#ff9000')
    }
  }
})

export { theme }
