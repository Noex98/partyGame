import React from 'react';
import styles from './style.module.scss';

export interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    text?: string;
    highlighted?: boolean;
}

export const Button = ({
    text = "",
    highlighted = false,
    ...props
  }: Props ) => {

  return (
    <button
        className={styles.base + " " + (highlighted && styles.highlighted)}
        {...props}
    >
        {text}
    </button>
  )
}