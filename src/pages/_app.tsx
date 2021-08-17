import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Bíblia Sagrada</title>
        <meta
          name="description"
          content="A palavra de Deus, na palma da sua mão."
        />
        <meta name="theme-color" content="#1A202C" />

        <meta name="application-name" content="Biblia Sagrada" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Biblia Sagrada" />
        <meta
          name="description"
          content="Biblia Sagrada completa e gratuita!"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/img/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/img/icon-256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="384x384"
          href="/img/icon-384x384.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/img/icon-512x512.png"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://biblia-omega.vercel.app/" />
        <meta name="twitter:title" content="Biblia Sagrada" />
        <meta
          name="twitter:description"
          content="A palavra de Deus, na palma da sua mão."
        />
        <meta
          name="twitter:image"
          content="https://biblia-omega.vercel.app//img/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@pauloluan" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bíblia Sagrada" />
        <meta
          property="og:description"
          content="A palavra de Deus, na palma da sua mão."
        />
        <meta property="og:site_name" content="Bíblia Sagrada" />
        <meta property="og:url" content="https://biblia-omega.vercel.app/" />
        <meta
          property="og:image"
          content="https://biblia-omega.vercel.app/img/apple-touch-icon.png"
        />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
