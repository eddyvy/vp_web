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

export const Home: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = homeContent[lang]

  const images = [
    {
      label: content.carouselLabel1,
      imgPath: content.imageCar1,
    },
    {
      label: content.carouselLabel2,
      imgPath: content.imageCar2,
    },
    {
      label: content.carouselLabel3,
      imgPath: content.imageCar3,
    },
    {
      label: content.carouselLabel4,
      imgPath: content.imageCar4,
    },
    {
      label: content.carouselLabel5,
      imgPath: content.imageCar5,
    },
    {
      label: content.carouselLabel6,
      imgPath: content.imageCar6,
    },
    {
      label: content.carouselLabel7,
      imgPath: content.imageCar7,
    },
  ]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`VP | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name="description"></meta>
      </Head>
      <div className={styles.homeVideoContainer}>
        <video className={styles.homeVideo} loop autoPlay muted>
          <source src={content.video1} type="video/mp4" />
        </video>
        <h1 className={styles.homeTitle}>{content.title}</h1>
        <Link href={allRoutes.CONTACT.path[lang]}>
          <a>
            <Button
              sx={{
                bottom: '20%',
                color: '#f5f8fa',
                fontWeight: 550,
                left: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
              }}
              variant="contained"
            >
              {content.button1}
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.homeSectionContainer}>
        <div className={styles.homeSectionText}>
          <p>{content.paragraph}</p>
        </div>
        <AppCarousel images={images} />
        <div className={styles.homeSectionButton}>
          <Link href={allRoutes.SERVICES.path[lang]}>
            <a>
              <Button
                sx={{
                  color: '#f5f8fa',
                  fontWeight: 550,
                }}
                variant="contained"
              >
                {content.button2}
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.homeVideoContainer}>
        <video className={styles.homeVideoSecond} loop autoPlay muted>
          <source
            src="https://storage.googleapis.com/valls-media/vp-web/proposicion.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className={styles.homeSubTitle}>{content.subtitle2}</h2>
        <Link href={allRoutes.LOCATIONS.path[lang]}>
          <a>
            <Button
              sx={{
                bottom: '20%',
                color: '#f5f8fa',
                fontWeight: 550,
                left: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
              }}
              variant="contained"
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
                  sx={{
                    color: '#f5f8fa',
                    fontWeight: 550,
                  }}
                  variant="contained"
                >
                  {content.button4}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
