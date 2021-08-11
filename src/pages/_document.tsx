import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import Fonts from '@styles/Fonts'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <Fonts />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
