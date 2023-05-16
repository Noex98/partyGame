import React from 'react';
import Image from 'next/image';
import LogoSvg from './logo.svg'

interface Props {
    height?: number,
    width?: number
}

export const Logo = ({width = 250, height = 60}: Props ) => {
    return (
        <Image src={LogoSvg} alt="logo" width={width} height={height}/>
    )
}
