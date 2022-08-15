import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import Header from '@components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity },
    },
  })
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Commerce Service</title>
          <meta name="description" content="Fastcampus commerce service" />
        </Head>
        <div className="px-36">
          <Header />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp
