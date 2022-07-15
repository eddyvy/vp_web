import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../../common/types'
import { Header } from './Header'
import { Footer } from './Footer'
import { Whatsapp } from '../social/Whatsapp'

export const PageLayout: FC<PageProps> = ({ children, ...pageProps }) => {
  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Header {...pageProps}/>
      <main>
        {children}
        <Whatsapp
          phone={34620844085}
        />
      </main>
      <Footer {...pageProps}/>
    </>
  )
}
