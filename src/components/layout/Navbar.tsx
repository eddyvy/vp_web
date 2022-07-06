import { FC } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { Language } from '../../language/types'
import { allRoutes } from '../../common/routes'
import { navbarContent } from '../../content/navbar'
import styles from './Navbar.module.css'

type Props = { lang: Language }

export const Navbar: FC<Props> = ({ lang }) => {
  const content = navbarContent[lang]

  return (
    <>
      <nav className={styles.navbar}>
        <Button
          variant="text"
        >
          <Link href={allRoutes.HOME.path[lang]}>
            <a>{content.home}</a>
          </Link>
        </Button>
        <Button
          variant="text"
        >
          <Link href={allRoutes.SERVICES.path[lang]}>
            <a>{content.services}</a>
          </Link>
        </Button>
        <Button
          variant="text"
        >
          <Link href={allRoutes.LOCATIONS.path[lang]}>
            <a>{content.locations}</a>
          </Link>
        </Button>
        <Button
          variant="text"
        >
          <Link href={allRoutes.ABOUT.path[lang]}>
            <a>{content.about}</a>
          </Link>
        </Button>
        <Button
          variant="text"
        >
          <Link href={allRoutes.CONTACT.path[lang]}>
            <a>{content.contact}</a>
          </Link>
        </Button>
      </nav>
    </>
  )
}
