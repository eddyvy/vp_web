import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { PageProps } from '../../common/types'
import { allRoutes } from '../../common/routes'
import { Language } from '../../language/types'
import { Navbar } from './Navbar'
import { LanguageSelector } from '../selector/LanguageSelector'

export const Header: FC<PageProps> = ({ lang, route }) => {
  const router = useRouter()

  const handleSelectLang = (lang: Language) => {
    const nextRt = allRoutes[route].path[lang]
    router.push(nextRt)
  }

  return (
    <header>
      <div>
        <Link href={allRoutes.HOME.path[lang]}>
          <a>
            <Image src="/vp_logo.png" alt="V&P Logo" width={90} height={45} />
          </a>
        </Link>
      </div>
      <Navbar lang={lang}/>
      <LanguageSelector
        defaultLang={lang}
        onLanguageSelected={handleSelectLang}
      />
    </header>
  )
}
