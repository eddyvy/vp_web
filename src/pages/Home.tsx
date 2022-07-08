import { FC } from 'react'
import Head from 'next/head'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
// import { homeContent } from '../content/home'
import styles from './Home.module.css'
import { Button } from '@mui/material'
import Link from 'next/link'
import { allRoutes } from '../common/routes'

export const Home: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = homeContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${'Home'/*content.title*/}`}</title> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      </Head>
      <div>
        <div className={styles.homeVideoContainer}>
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
          </video>
          <h1 className={styles.homeTitle}>Weddings in Mallorca</h1>
          <Link href={allRoutes.CONTACT.path[lang]}>
            <a>
              <Button
                className={styles.homeButton}
                variant='contained'
              >
                More Info
              </Button>
            </a>
          </Link>
        </div>
        <Link
          href="https://wa.me/34620844085"
        >
          <a
            className={styles.whatsappFloat}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </Link>
      </div>
    </PageLayout>
  )
}
