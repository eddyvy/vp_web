import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { contactContent } from '../content/contact'

export const Services: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = contactContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        {/* <title>{`V&P | ${content.title}`}</title> */}
      </Head>
      <h1>SERVICES</h1>
    </PageLayout>
  )
}