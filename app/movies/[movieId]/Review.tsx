'use client'

import React, { FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import styles from './styles.module.css'

const Review = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.Button}>Write a review</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <Dialog.Title className={styles.dialogTitle}>
            Review
          </Dialog.Title>
          <Dialog.Description className={styles.dialogDescription}>
            Write a review
          </Dialog.Description>
          <ReviewForm />
          <Dialog.Close asChild>
            <button className={styles.closeIcon} aria-label='close'>
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const ReviewForm = () => {
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      {rating}
      {content}
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor='rating'>Rating</label>
          <StarRating rating={rating} setRating={setRating} />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor='content'>Review</label>
          <textarea
            className='Input'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className={styles.Button}>Save changes</button>
          </Dialog.Close>
        </div>
        
      </form>
    </div>
  )
}

interface StarRatingProps {
  rating: number
  setRating: (rating: number) => void
}

const StarRating = ({rating, setRating}:StarRatingProps) => {
  const [hover, setHover] = useState(0)

  return (
    <div className='star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type='button'
            key={index}
            className={`${styles.starButton} ${index <= (hover || rating) ? styles.starFilled : styles.starEmpty}`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default Review