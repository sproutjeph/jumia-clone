import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AppProvider } from '../store/context'
import { Layout } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>Jumia Clone By Jeph</title>
          <meta name="description" content="Jumia Clone By Jeph" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
