import { FC } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { Language } from '../../language/types'
import { allRoutes } from '../../common/routes'
import { navbarContent } from '../../content/navbar'
import { PageProps } from '../../common/types'
import styles from './Navbar.module.css'

export const Navbar: FC<PageProps> = ({ lang, route }) => {
  const content = navbarContent[lang]

  return (
    <>
      <nav className={styles.navbar}>
        <Button className={styles.navbarButton} variant="text" size="large">
          <Link href={allRoutes.HOME.path[lang]}>
            <a className={
              `${route === 'HOME' && styles.navbarButtonSelected}`
            }>
              {content.home}
            </a>
          </Link>
        </Button>
        <Button className={styles.navbarButton} variant="text" size="large">
          <Link href={allRoutes.SERVICES.path[lang]}>
            <a className={
              `${route === 'SERVICES' && styles.navbarButtonSelected}`
            }>
              {content.services}
            </a>
          </Link>
        </Button>
        <Button className={styles.navbarButton} variant="text" size="large">
          <Link href={allRoutes.LOCATIONS.path[lang]}>
            <a className={
              `${route === 'LOCATIONS' && styles.navbarButtonSelected}`
            }>
              {content.locations}
            </a>
          </Link>
        </Button>
        <Button className={styles.navbarButton} variant="text" size="large">
          <Link href={allRoutes.ABOUT.path[lang]}>
            <a className={
              `${route === 'ABOUT' && styles.navbarButtonSelected}`
            }>
              {content.about}
            </a>
          </Link>
        </Button>
        <Button className={styles.navbarButton} variant="text" size="large">
          <Link href={allRoutes.CONTACT.path[lang]}>
            <a className={
              `${route === 'CONTACT' && styles.navbarButtonSelected}`
            }>
              {content.contact}
            </a>
          </Link>
        </Button>
      </nav>
    </>
  )
}
