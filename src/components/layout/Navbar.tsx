import { FC } from 'react'
import Link from 'next/link'
import { Language } from '../../language/types'
import { allRoutes } from '../../common/routes'

type Props = { lang: Language }

export const Navbar: FC<Props> = ({ lang }) => {
  // const content = navbarContent[lang]

  return (
    <>
      <nav>
        <Link href={allRoutes.HOME.path[lang]}>
          <a>{'home'}</a>
        </Link>
        <Link href={allRoutes.ABOUT.path[lang]}>
          <a>{'about'}</a>
        </Link>
        <Link href={allRoutes.CONTACT.path[lang]}>
          <a>{'contact'}</a>
        </Link>
      </nav>
    </>
  )
}
