import React from 'react'
import MovingCards from '../components/Movingcards/Movingcards'

function HomePage({cards}) {
  return (
    <div>
        <MovingCards cards = {cards}/>
    </div>
  )
}

export default HomePage