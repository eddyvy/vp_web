import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { homeContent } from '../content/home'
import styles from './Home.module.css'

export const Home: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = homeContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        {/* <title>{`V&P | ${content.title}`}</title> */}
      </Head>
      <div>
        <div className={styles.homeVideoContainer}>
          <h1 className={styles.homeTitle}>Weddings in Mallorca</h1>
          <video
            className={styles.homeVideo}
            loop
            autoPlay
            muted
          >
            <source
              src='/videos/example.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </PageLayout>
  )
}
