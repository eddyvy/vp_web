import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { contactContent } from '../content/contact'

export const Contact: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = contactContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${'Contact'}`}</title>
      </Head>
      <h1>CONTACT</h1>
    </PageLayout>
  )
}
