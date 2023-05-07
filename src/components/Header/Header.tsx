import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
        <Link href="/">
            DrukSpil
        </Link>
    </header>
  )
}
