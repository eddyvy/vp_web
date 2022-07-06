import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Toolbar } from '@mui/material'
import { useRouter } from 'next/router'
import { PageProps } from '../../common/types'
import { allRoutes } from '../../common/routes'
import { Language } from '../../language/types'
import { Navbar } from './Navbar'
import { LanguageSelector } from '../selector/LanguageSelector'
import styles from './Header.module.css'

export const Header: FC<PageProps> = ({ lang, route }) => {
  const router = useRouter()

  const handleSelectLang = (lang: Language) => {
    const nextRt = allRoutes[route].path[lang]
    router.push(nextRt)
  }

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
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
                  <Image src="/icons/VP_Logo_pequeno.png" alt="V&P Logo" layout='fill' />
                </a>
              </Link>
            </div>
            <Navbar lang={lang}/>
            <div className={styles.headerLangSelector}>
              <LanguageSelector
                defaultLang={lang}
                onLanguageSelected={handleSelectLang}
              />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}
