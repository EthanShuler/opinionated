'use client'

import React, { FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import styles from './styles.module.css'

const Review = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} ${styles.openButton}`}>Write a review</button>
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
      <p>chosen rating: {rating}</p>
      <p>typed review: {content}</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.Fieldset}>
          <label className={styles.Label} htmlFor='rating'>Rating</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div className={styles.Fieldset}>
          <label className={styles.Label} htmlFor='content'>Review</label>
          <textarea
            className={styles.Input}
            value={content}
            cols={30}
            rows={10}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className={`${styles.Button} ${styles.saveButton}`}>Save changes</button>
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
    <div className={styles.starRating}>
      {[...Array(10)].map((star, index) => {
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
            <span className={styles.star}>&#9733;</span>
          </button>
        )
      })}
      {hover}
    </div>
  )
}

export default Review