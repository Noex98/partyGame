import '@/styles/globals.scss'
import style from './layout.module.scss'

import { PlayerContextProvider } from '../Utils/PlayerContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={style.background}>
                <PlayerContextProvider>
                    <main>
                        {children}
                    </main>
                </PlayerContextProvider>
            </body>
        </html>
    );
}

