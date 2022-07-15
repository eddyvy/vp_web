import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Paper } from '@mui/material'
import { PageProps } from '../common/types'
import { allRoutes } from '../common/routes'
import { PageLayout } from '../components/layout/PageLayout'
import { AppCarousel } from '../components/carousel/AppCarousel'
import { homeContent } from '../content/home'
import styles from './Home.module.css'

export const Home: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = homeContent[lang]

  const images = [
    {
      label: content.carouselLabel1,
      imgPath: '/images/carousel_1.jpg',
    },
    {
      label: content.carouselLabel2,
      imgPath: '/images/carousel_2.jpg',
    },
    {
      label: content.carouselLabel3,
      imgPath: '/images/carousel_3.jpg',
    },
    {
      label: content.carouselLabel4,
      imgPath: '/images/carousel_4.jpg',
    },
  ]

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
        <div className={styles.homeSectionContainer}>
          <AppCarousel images={images} />
          <div className={styles.homeSectionButton}>
            <Link href={allRoutes.LOCATIONS.path[lang]}>
              <a>
                <Button
                  className={styles.homeButtonList}
                  variant='contained'
                >
                  {content.button2}
                </Button>
              </a>
            </Link>
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
          <h2 className={styles.homeSubTitle}>{content.subtitle2}</h2>
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
        <div className={styles.homeSectionContainer}>
          <div className={styles.homeLastSection}>
            <h3 className={styles.homeLastSubtitle}>{content.subtitle3}</h3>
            <div className={styles.homeLastSectionButton}>
              <Link href={allRoutes.ABOUT.path[lang]}>
                <a>
                  <Button
                    className={styles.homeButtonList}
                    variant='contained'
                  >
                    {content.button4}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
