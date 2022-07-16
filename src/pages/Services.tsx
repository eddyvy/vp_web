import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
import { servicesContent } from '../content/services'
import { allRoutes } from '../common/routes'
import styles from './Services.module.css'

export const Services: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = servicesContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name="description"></meta>
      </Head>
      <div className={styles.servicesTopImgContainer}>
        <h1 className={styles.servicesTitle}>{content.title}</h1>
        <Image
          src='/images/votos.jpg'
          alt='Services top image'
          layout='fill'
          objectFit='cover'
          objectPosition='center center'
          className={styles.servicesTopImg}
        />
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesBody}>
          <div className={styles.servicesTextCard}>
            <p>{content.text1}</p>
            <p>{content.text2}</p>
            <p>{content.text3}</p>
          </div>
          <div className={styles.servicesImgContainer}>
            <Image
              src='/images/ready.jpg'
              alt='Services image'
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              className={styles.servicesTopImg}
            />
          </div>
        </div>
        <Link href={allRoutes.CONTACT.path[lang]}>
          <a>
            <Button
              className={styles.servicesButton}
              variant='contained'
            >
              {content.button}
            </Button>
          </a>
        </Link>
      </div>
    </PageLayout>
  )
}
