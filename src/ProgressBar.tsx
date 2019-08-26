import React, { useState, useEffect } from 'react'

type Direction = 'right' | 'left'
type Position = 'top' | 'bottom'
type Props = {
    color?: string
    height?: number
    direction?: Direction
    position?: Position
}

const ProgressBar: React.FC<Props> = ({
    color = '#1ce',
    height = 4,
    direction = 'right',
    position = 'top',
}) => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        document.addEventListener('scroll', updateProgressBar)

        return () => document.removeEventListener('scroll', updateProgressBar)
    }, [])

    const updateProgressBar = () => {
        const windowHeight =
            document.documentElement.offsetHeight - window.innerHeight
        requestAnimationFrame(() => {
            setScroll(Math.floor((window.pageYOffset / windowHeight) * 100))
        })
    }

    return <div style={getStyle(scroll, color, height, direction, position)} />
}

const getStyle: Function = (
    scroll: number,
    color: string,
    height: number,
    direction: Direction,
    position: Position
) => {
    const style: React.CSSProperties = {
        position: 'fixed' as 'fixed',
        left: 0,
        right: 0,
        width: '100%',
        height,
        transition: 'all 4s',
        background: `linear-gradient(to ${direction}, ${color} ${scroll}%, transparent 0)`,
    }

    position === 'top' ? (style.top = 0) : (style.bottom = 0)

    return style
}

export default ProgressBar
