import { ThemeProvider } from '@emotion/react'
import Layout from 'components/Layout'
import 'styles/globals.scss'
import theme from 'mui-theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
// import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
