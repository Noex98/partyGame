import React, { useEffect, useState } from "react"

interface Props {
    children?: React.ReactNode
    orientation: 'landscape' | 'portrait'
}

export const ForceOrientation = ({children, orientation}: Props) => {

    const [angle, setAngle] = useState(screen.orientation.angle);

    useEffect(() => {
        screen.orientation.onchange = () => {
            setAngle(screen.orientation.angle)
        }
        return () => {
            screen.orientation.onchange = null;
        }
    }, [])

    if(orientation === "landscape" && screen.orientation.angle !== 90){
        return (
            <div>Please rotate your phone</div>
        )
    }
    
    if(orientation === "portrait" && screen.orientation.angle !== 0){
        return (
            <div>Please rotate your phone</div>
        )
    }

    return (
        <>
            {children}
        </>
    );
}
