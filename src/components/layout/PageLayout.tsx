import { FC } from 'react'
import { PageProps } from '../../common/types'
import { Header } from './Header'
import { Footer } from './Footer'
import { Whatsapp } from '../social/Whatsapp'

export const PageLayout: FC<PageProps> = ({ children, ...pageProps }) => {
  return (
    <>
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
