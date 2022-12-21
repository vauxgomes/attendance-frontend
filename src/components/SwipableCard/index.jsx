import './styles.css'

import { useState } from 'react'

export default function SwipableCard({ children, handleSwipeEnd }) {
  const [direction, setDirection] = useState(0)

  const onScroll = (e) => {
    const target = e.target.children[1]

    const x = target.getBoundingClientRect().x
    const w = target.offsetWidth

    if (Math.abs(x) > w * 0.6) {
      setDirection(Math.sign(x))
    } else {
      setDirection(0)
    }
  }

  const onScrollEnd = (e) => {
    handleSwipeEnd(direction)
  }

  return (
    <div
      className="swipeable-container"
      onScroll={onScroll}
      onTouchEnd={onScrollEnd}
    >
      <div className="action left">
        <i className="bx bxs-user-check"></i>
      </div>

      <div className="swipeable">{children}</div>

      <div className="action right">
        <i className="bx bxs-user-x"></i>
      </div>
    </div>
  )
}
