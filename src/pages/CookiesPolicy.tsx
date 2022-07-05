import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { cookiesPolicyContent } from '../content/cookiesPolicy'

export const CookiesPolicy: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = cookiesPolicyContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        {/* <title>{`V&P | ${content.title}`}</title> */}
      </Head>
      <h1>COOKIES POLICY</h1>
    </PageLayout>
  )
}
