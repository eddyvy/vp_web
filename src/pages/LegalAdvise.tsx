import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { legalAdviseContent } from '../content/legalAdvise'

export const LegalAdvise: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = legalAdviseContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        {/* <title>{`V&P | ${content.title}`}</title> */}
      </Head>
      <h1>LEGAL ADVISE</h1>
    </PageLayout>
  )
}
