import React, { useState, useEffect } from 'react'

type Direction = 'right' | 'left'
type Position = 'top' | 'bottom'
type Props = {
    color?: string
    height?: number
    direction?: Direction
    position?: Position
    gradient?: boolean
    gradientColor?: string
}

const ProgressBar: React.FC<Props> = ({
    color = '#1ce',
    height = 4,
    direction = 'right',
    position = 'top',
    gradient = false,
    gradientColor = 'yellow',
}) => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        document.addEventListener('scroll', updateProgressBar)
        updateProgressBar()
        return () => document.removeEventListener('scroll', updateProgressBar)
    }, [])

    const updateProgressBar = () => {
        const windowHeight =
            document.documentElement.offsetHeight - window.innerHeight
        requestAnimationFrame(() => {
            setScroll(Math.floor((window.pageYOffset / windowHeight) * 100))
        })
    }

    return (
        <div
            style={getStyle(
                scroll,
                color,
                height,
                direction,
                position,
                gradient,
                gradientColor
            )}
        />
    )
}

const getStyle: Function = (
    scroll: number,
    color: string,
    height: number,
    direction: Direction,
    position: Position,
    gradient: boolean,
    gradientColor: string
) => {
    const style: React.CSSProperties = {
        position: 'fixed' as 'fixed',
        left: 0,
        right: 0,
        height,
        zIndex: 999,
    }

    style.background = gradient
        ? `linear-gradient(to ${direction}, ${color} ${scroll /
              2}%,${gradientColor} ${scroll}%, transparent 0)`
        : `linear-gradient(to ${direction}, ${color} ${scroll}%, transparent 0)`

    position === 'top' ? (style.top = 0) : (style.bottom = 0)

    return style
}

export default ProgressBar
