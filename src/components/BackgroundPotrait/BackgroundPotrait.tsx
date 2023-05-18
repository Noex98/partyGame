import React from 'react'
import styles from './style.module.scss';
import { Logo } from '@/components';



interface Props {
  children: React.ReactNode;
}

const BackgroundPotrait = ({ children }: Props) => {
  return (
    <div className={styles.background}>

      <div className={styles.waves}>
        <div className={styles.backgroundUpper}>
          <Logo />
          <svg width="100%" fill="#2F2059">
            <path
              fill="#2F2059"
              d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 

          V 359 
          H 0 
          V 67
          Z">
              <animate
                repeatCount="indefinite"
                fill="#2F2059"
                attributeName="d"
                dur="10s"
                values="
            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z
            ">
              </animate>
            </path>
          </svg>
        </div>

      </div>
    </div>
  )
}

export default BackgroundPotrait