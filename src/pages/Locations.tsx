import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
import { locationsContent } from '../content/locations'
import { allRoutes } from '../common/routes'
import styles from './Locations.module.css'

export const Locations: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = locationsContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`VP | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name="description"></meta>
      </Head>
      <div className={styles.locationsTopImgContainer}>
        <h1 className={styles.locationsTitle}>{content.title}</h1>
        <Image
          src={content.image1}
          alt="Locations top image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          className={styles.locationsTopImg}
        />
      </div>
      <div className={styles.locationsContainer}>
        <div className={styles.locationsBody}>
          <div className={styles.locationsTextCard}>
            <p>{content.text1}</p>
            <p>{content.text2}</p>
            <p>{content.text3}</p>
            <p>{content.text4}</p>
            <p>{content.text5}</p>
          </div>
          <div className={styles.locationsImgContainer}>
            <Image
              src={content.image2}
              alt="Locations image"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />
          </div>
        </div>
        <div className={styles.locationTextCardBottom}>
          <p>{content.text6}</p>
          <p>{content.text7}</p>
          <p>{content.text8}</p>
          <p>{content.text9}</p>
        </div>
        <Link href={allRoutes.CONTACT.path[lang]}>
          <a>
            <Button
              sx={{
                color: '#f5f8fa',
                fontWeight: 550,
              }}
              variant="contained"
            >
              {content.button}
            </Button>
          </a>
        </Link>
      </div>
    </PageLayout>
  )
}
