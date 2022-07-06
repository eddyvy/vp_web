import { FC } from 'react'
import { PageProps } from '../../common/types'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'

export const PageLayout: FC<PageProps> = ({ children, ...pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Header {...pageProps}/>
      <main>
        {children}
      </main>
      <Footer {...pageProps}/>
    </>
  )
}
