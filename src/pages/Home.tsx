import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@mui/material'
import { PageProps } from '../common/types'
import { allRoutes } from '../common/routes'
import { PageLayout } from '../components/layout/PageLayout'
import { ServicesList } from '../components/list/ServicesList'
// import { homeContent } from '../content/home'
import styles from './Home.module.css'

export const Home: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  // const content = homeContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${'Home'/*content.title*/}`}</title>
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
              src='/videos/mallorca_1.mp4'
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
                I Want to Marry
              </Button>
            </a>
          </Link>
        </div>
        <div className={styles.homeImageListContainer}>
          <div className={styles.homeListContainer}>
            <h3>The best service you can have</h3>
            <ServicesList />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src='/images/novios_sol.jpg'
              alt='Novios al sol'
              layout='fill'
            />
          </div>
        </div>
        <div className={styles.homeVideoContainer}>
          <video
            className={styles.homeVideo}
            loop
            autoPlay
            muted
          >
            <source
              src='/videos/proposicion.mp4'
              type='video/mp4'
            />
          </video>
          <h2 className={styles.homeSubTitle}>And they all lived happily ever after</h2>
          <Link href={allRoutes.SERVICES.path[lang]}>
            <a>
              <Button
                className={styles.homeButton}
                variant='contained'
              >
                Know More
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
