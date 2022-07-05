import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { homeContent } from '../content/home'

export const Home: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = homeContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        {/* <title>{`V&P | ${content.title}`}</title> */}
      </Head>
      <h1>HOME</h1>
    </PageLayout>
  )
}
