import '@/styles/globals.scss'
import style from './layout.module.scss'

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={style.background}>{children}</body>
        </html>
    );
}

