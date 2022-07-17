import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageProps } from '../../common/types'
import { allRoutes } from '../../common/routes'
import { footerContent } from '../../content/footer'
import styles from './Footer.module.css'
import { Button } from '@mui/material'

export const Footer: FC<PageProps> = ({ lang }) => {
  const content = footerContent[lang]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLine} />
      <div className={styles.footerImageContainer}>
        <Image src="/logo/VP_Logo_mediano.png" alt="V&P Logo" layout="fill" />
      </div>
      <div className={styles.footerLinksContainer}>
        <Button size="small">
          <Link href={allRoutes.ABOUT.path[lang]}>
            <a className={styles.footerLink}>{content.about}</a>
          </Link>
        </Button>
        <Button size="small">
          <Link href={allRoutes.PRIVACY.path[lang]}>
            <a className={styles.footerLink}>{content.privacy}</a>
          </Link>
        </Button>
        <Button size="small">
          <Link href={allRoutes.COOKIES.path[lang]}>
            <a className={styles.footerLink}>{content.cookies}</a>
          </Link>
        </Button>
        <Button size="small">
          <Link href={allRoutes.DISCLAIMER.path[lang]}>
            <a className={styles.footerLink}>{content.disclaimer}</a>
          </Link>
        </Button>
      </div>
    </footer>
  )
}
