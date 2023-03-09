'use client'
import React from 'react'
import { createClient } from '../../utils/supabase-browser'

interface MyReviewsProps {
  userId: string
}

const MyReviews = async ({ userId }: MyReviewsProps) => {
  const supabase = createClient()
  const { data: reviews } = await supabase
    .from('reviews')
    .select('*')
    .eq('user_id', userId)

  if (!reviews) {
    return <><p>No Reviews found.</p></>
  }

  return (
    <div>
      <h2>My Reviews</h2>
      <div>
        <>
        {reviews.length == 0 ? (<p>No reviews</p>) :
        reviews.map(review => (
            <div key={review.id}>
              <h4>{review.title}: {review.rating}</h4>
              <div>
                <p>{review.content}</p>
              </div>
            </div>
        ))} </>
      </div>
    </div>
  )
}

export default MyReviews