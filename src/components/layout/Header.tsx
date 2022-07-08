import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Button, Toolbar } from '@mui/material'
import { motion } from 'framer-motion'
import { PageProps } from '../../common/types'
import { allRoutes } from '../../common/routes'
import { Language } from '../../language/types'
import { Navbar } from './Navbar'
import { LanguageSelector } from '../selector/LanguageSelector'
import styles from './Header.module.css'

export const Header: FC<PageProps> = ({ lang, route }) => {
  const router = useRouter()

  const [ showNavbar, setShowNavbar ] = useState<boolean>(false)
  const [ firstClick, setFirstClick ] = useState<boolean>(false)

  const handleSelectLang = (lang: Language) => {
    const nextRt = allRoutes[route].path[lang]
    router.push(nextRt)
  }

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev)
    setFirstClick(true)
  }

  return (
    <header>
      <Box sx={{ flexGrow: 1 }} className={styles.headerDesktop}>
        <AppBar
          position="static"
          color="transparent"
        >
          <Toolbar
            className={styles.headerToolbar}
          >
            <div className={styles.headerImageContainer}>
              <Link href={allRoutes.HOME.path[lang]}>
                <a>
                  <Image src="/logo/VP_Logo_pequeno.png" alt="V&P Logo" layout="fill" />
                </a>
              </Link>
            </div>
            <Navbar lang={lang} route={route} />
            <div className={styles.headerLangSelector}>
              <LanguageSelector
                defaultLang={lang}
                onLanguageSelected={handleSelectLang}
              />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={styles.headerMobile}>
        <motion.div
          whileTap={{ scale: 0.9, zIndex: 10 }}
        >
          <Button
            className={styles.headerImageContainerMobile}
            onClick={toggleNavbar}
          >
            <Image
              src="/logo/VP_Logo_mediano_circulo.svg"
              alt="V&P Logo"
              layout="fill"
            />
          </Button>
        </motion.div>
        <div className={styles.headerLangSelectorMobile}>
          <LanguageSelector
            defaultLang={lang}
            onLanguageSelected={handleSelectLang}
          />
        </div>
        <motion.div
          animate={{ x: (showNavbar ? 0 : '-35vw'), zIndex: 9 }}
          transition={{
            x: { type: 'just' },
          }}
        >
          { firstClick && <Navbar lang={lang} route={route}/> }
        </motion.div>
      </div>
    </header>
  )
}
