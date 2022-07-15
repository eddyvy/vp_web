import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@mui/material'
import { PageProps } from '../common/types'
import { allRoutes } from '../common/routes'
import { PageLayout } from '../components/layout/PageLayout'
import { AppCarousel } from '../components/carousel/AppCarousel'
import { homeContent } from '../content/home'
import styles from './Home.module.css'

const images = [
  {
    label: 'Your dream day',
    imgPath: '/images/carousel_1.jpg',
  },
  {
    label: 'Mallorca Island',
    imgPath: '/images/carousel_2.jpg',
  },
  {
    label: 'For ever',
    imgPath: '/images/carousel_3.jpg',
  },
  {
    label: 'As you wish',
    imgPath: '/images/carousel_4.jpg',
  },
]

export const Home: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = homeContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name="description"></meta>
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
          <h1 className={styles.homeTitle}>{content.title}</h1>
          <Link href={allRoutes.CONTACT.path[lang]}>
            <a>
              <Button
                className={styles.homeButton}
                variant='contained'
              >
                {content.button1}
              </Button>
            </a>
          </Link>
        </div>
        <div className={styles.homeImageListContainer}>
          <AppCarousel images={images} />
          <div className={styles.homeImageListButton}>
            <Button
              className={styles.homeButtonList}
              variant='contained'
            >
              {content.button2}
            </Button>
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
          <Link href={allRoutes.LOCATIONS.path[lang]}>
            <a>
              <Button
                className={styles.homeButton}
                variant='contained'
              >
                {content.button3}
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
