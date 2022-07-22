import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'
import { PageProps } from '../common/types'
import { PageLayout } from '../components/layout/PageLayout'
import { aboutContent } from '../content/about'
import { allRoutes } from '../common/routes'
import styles from './AboutUs.module.css'

export const AboutUs: FC<PageProps> = (pageProps) => {
  const { lang } = pageProps
  const content = aboutContent[lang]

  return (
    <PageLayout {...pageProps}>
      <Head>
        <title>{`V&P | ${content.headTitle}`}</title>
        <meta content={content.headDescription} name="description"></meta>
      </Head>
      <h1 className={styles.aboutTitle}>{content.title}</h1>
      {/* <div className={styles.aboutTopImgContainer}> */}
      {/* <Image
          src='/images/'
          alt='About top image'
          layout='fill'
          objectFit='cover'
          objectPosition='center center'
          className={styles.aboutTopImg}
        />
      </div> */}
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBody}>
          <div className={styles.aboutTextCard}>
            <p>{content.text1}</p>
            <p>{content.text2}</p>
            <p>{content.text3}</p>
            <p>{content.text4}</p>
            <p>{content.text5}</p>
            <p>{content.text6}</p>
          </div>
          <div className={styles.aboutImgContainer}>
            <Image
              src={content.image1}
              alt='About image'
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
            />
          </div>
        </div>
        <Link href={allRoutes.CONTACT.path[lang]}>
          <a>
            <Button
              sx={{
                color: '#f5f8fa',
                fontWeight: 550,
              }}
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
