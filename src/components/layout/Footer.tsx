import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageProps } from '../../common/types'
import { allRoutes } from '../../common/routes'
import { footerContent } from '../../content/footer'

export const Footer: FC<PageProps> = ({ lang }) => {
  const content = footerContent[lang]

  return (
    <footer>
      <div>
        <Image src="/logo/VP_Logo_mediano.svg" alt="V&P Logo" width={150} height={130} />
      </div>
      <div>
        <Link href={allRoutes.ABOUT.path[lang]}>
          <a>{content.about}</a>
        </Link>
        <Link href={allRoutes.PRIVACY.path[lang]}>
          <a>{content.privacy}</a>
        </Link>
        <Link href={allRoutes.COOKIES.path[lang]}>
          <a>{content.cookies}</a>
        </Link>
        <Link href={allRoutes.LEGAL_ADVICE.path[lang]}>
          <a>{content.legal}</a>
        </Link>
      </div>
    </footer>
  )
}
