import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss';
import { Logo } from '@/components';

export const Header = () => {
  return (
    <header className={styles.container}>
        <Link href="/">
            <Logo size='large' />
        </Link>
    </header>
  )
}
