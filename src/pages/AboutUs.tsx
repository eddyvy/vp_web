import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { aboutUsContent } from '../content/aboutUs'

export const AboutUs: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = aboutUsContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        {/* <title>{`V&P | ${content.title}`}</title> */}
      </Head>
      <h1>ABOUT US</h1>
    </PageLayout>
  )
}
