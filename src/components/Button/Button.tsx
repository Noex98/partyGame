import React from 'react';
import styles from './style.module.scss';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    text?: string;
    color?: "positive" | "negative" | "neutral";
    variation?: "primary" | "secondary";
}

export const Button = ({
    text = "", 
    color = "neutral", 
    variation = "primary", 
    ...props
  }: Props)  => {

  return (
    <button
        className={styles.base + " " + styles[color] + " " + styles[variation]}
        {...props}
    >
        {text}
    </button>
  )
}
