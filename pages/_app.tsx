import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { appTheme } from '../src/common/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
