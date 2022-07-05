import { FC } from 'react'
import { PageProps } from '../../common/types'
import { Header } from './Header'
import { Footer } from './Footer'

export const PageLayout: FC<PageProps> = ({ children, ...pageProps }) => {
  return (
    <>
      <Header {...pageProps}/>
      <main>
        {children}
      </main>
      <Footer {...pageProps}/>
    </>
  )
}
