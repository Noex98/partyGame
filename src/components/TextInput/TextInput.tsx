import React from 'react'
import styles from './style.module.scss'

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
    label?: string
}

export const TextInput = ({label, ...props}: Props) => {
  return (
    <div>
        <label className={styles.label}>
            {!!label?.length && <span className={styles.span} >{label}</span>}
            <input className={styles.input} type="text" {...props}/>
        </label>
    </div>
  )
}
