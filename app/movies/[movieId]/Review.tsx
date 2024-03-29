'use client'

import React, { FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import styles from './styles.module.css'
import { useSupabase } from '../../../components/supabase-provider'

interface StarRatingFormProps {
  rating: number
  setRating: (rating: number) => void
}

export const StarRatingForm = ({ rating, setRating }: StarRatingFormProps) => {
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

interface ReviewProps {
  movieId: number
}

const Review = ({ movieId }: ReviewProps) => {
  const { supabase, session } = useSupabase()

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('reviews')
      .insert([
        { title, content, rating, movie_id: movieId, user_id: session?.user.id },
      ])
      setOpen(false)
    }

    return session ? (
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className={`${styles.Button} ${styles.themedButton}`}>Write a review</button>
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
            <form onSubmit={handleSubmit}>
              <div className={styles.Fieldset}>
                <label className={styles.Label} htmlFor='title'>Title</label>
                <input placeholder='Title' className={styles.Input}
                  type='text' name='title' id='title' required
                  onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className={styles.Fieldset}>
                <label className={styles.Label} htmlFor='rating'>Rating</label>
                <StarRatingForm rating={rating} setRating={setRating} />
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
                <button type='submit' className={`${styles.Button} ${styles.themedButton}`}>Save changes</button>
              </div>
            </form>
            <Dialog.Close asChild>
              <button className={styles.closeIcon} aria-label='close'>
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    ) : null
  }

  export default Review