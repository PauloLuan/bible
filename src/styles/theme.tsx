import { extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: 'Sens',
  body: 'Sens'
}

const customTheme = extendTheme({
  config: { initialColorMode: 'light', useSystemColorMode: false },
  fonts
})

export default customTheme
