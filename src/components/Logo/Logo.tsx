import React from 'react';
import style from './style.module.scss';

interface Props {
    size?: "small" | "medium" | "large"
}

export const Logo = ({size = "medium"}: Props ) => {
    return (
        <div className={style.logoText + " " + style[size]}>Drinkr</div>
    )
}
