'use client'

import React, { useState } from 'react'

const StarRating = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className='star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type='button'
            key={index}
            className={'bg-transparent border-0 outline-none cursor-pointer '
              + (index <= (hover || rating) ? 'text-black' : 'text-gray-500')}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className='text-lg'>&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default StarRating