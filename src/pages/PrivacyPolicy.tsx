import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { privacyPolicyContent } from '../content/privacyPolicy'

export const PrivacyPolicy: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = privacyPolicyContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        {/* <title>{`V&P | ${content.title}`}</title> */}
      </Head>
      <h1>PRIVACY POLICY</h1>
    </PageLayout>
  )
}
