import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { SxProps, Toolbar } from '@mui/material'
import { motion } from 'framer-motion'
import { PageProps } from '../../common/types'
import { allRoutes } from '../../common/routes'
import { Language } from '../../language/types'
import { Navbar } from './Navbar'
import { LanguageSelector } from '../selector/LanguageSelector'
import styles from './Header.module.css'

export const Header: FC<PageProps> = ({ lang, route }) => {
  const router = useRouter()

  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [firstClick, setFirstClick] = useState<boolean>(false)

  const handleSelectLang = (lang: Language) => {
    const nextRt = allRoutes[route].path[lang]
    router.push(nextRt)
  }

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev)
    setFirstClick(true)
  }

  const headerToolbar: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    width: '100vw',
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerDesktop}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="transparent">
            <Toolbar sx={headerToolbar}>
              <div className={styles.headerImageContainer}>
                <Link href={allRoutes.HOME.path[lang]}>
                  <a>
                    <Image
                      src="/logo/vp-logo.png"
                      alt="V&P Logo"
                      layout="fill"
                    />
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
      </div>
      <div className={styles.headerMobile}>
        <motion.div
          whileTap={{ scale: 0.9, zIndex: 10 }}
          className={styles.headerImageContainerMobile}
          onClick={toggleNavbar}
        >
          <Image src="/logo/vp-logo.png" alt="V&P Logo" layout="fill" />
        </motion.div>
        <div className={styles.headerLangSelectorMobile}>
          <LanguageSelector
            defaultLang={lang}
            onLanguageSelected={handleSelectLang}
          />
        </div>
        <motion.div
          animate={{ x: showNavbar ? '-5vw' : '-100vw', zIndex: 9 }}
          transition={{
            x: { type: 'just' },
          }}
        >
          {firstClick && <Navbar lang={lang} route={route} />}
        </motion.div>
      </div>
    </header>
  )
}
