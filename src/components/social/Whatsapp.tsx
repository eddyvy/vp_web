import { FC } from 'react'
import Link from 'next/link'
import styles from './Whatsapp.module.css'

export const Whatsapp: FC<{ phone: number }> = ({ phone }) => {
  return (
    <Link
      href={`https://wa.me/${phone}`}
    >
      <a
        className={styles.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp fa-lg"></i>
      </a>
    </Link>
  )
}
