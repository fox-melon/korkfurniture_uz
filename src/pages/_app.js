import { ThemeProvider } from '@emotion/react'
import Layout from 'components/Layout'
import 'styles/globals.scss'
import theme from 'mui-theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
