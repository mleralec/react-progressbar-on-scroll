import React, { useState, useEffect, useRef } from 'react'

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

export const ProgressBar: React.FC<Props> = ({
  color = '#1ce',
  height = 4,
  direction = 'right',
  position = 'top',
  gradient = false,
  gradientColor = 'yellow',
}) => {
  const [scroll, setScroll] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    document.addEventListener('scroll', updateProgressBar)
    updateProgressBar()
    return () => document.removeEventListener('scroll', updateProgressBar)
  }, [])

  const updateProgressBar = () => {
    if (!ticking.current) {
      const windowHeight =
        document.documentElement.offsetHeight - window.innerHeight

      window.requestAnimationFrame(() => {
        setScroll(Math.floor((window.pageYOffset / windowHeight) * 100))
        ticking.current = false
      })
    }
    ticking.current = true
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        height,
        zIndex: 999,
        top: position === 'top' ? 0 : 'unset',
        bottom: position === 'bottom' ? 0 : 'unset',
        background: gradient
          ? `linear-gradient(to ${direction}, ${color} ${
              scroll / 2
            }%,${gradientColor} ${scroll}%, transparent 0)`
          : `linear-gradient(to ${direction}, ${color} ${scroll}%, transparent 0)`,
      }}
    />
  )
}
