import 'server-only'
import { formatDate } from '../../../utils/dateTime'
import styles from './styles.module.css'
import supabase from '../../../utils/supabase'
import Link from 'next/link'
import { createClient } from '../../../utils/supabase-server'

// do not cache this page
export const revalidate = 0

const StarRating = ({ rating }: { rating: number }) => {
  const stars = []
  for (let i = 0; i < 10; i++) {
    if (i < rating) {
      stars.push(<span key={i} className={`${styles.star} ${styles.starFilled}`}>&#9733;</span>)
    } else {
      stars.push(<span key={i} className={`${styles.star} ${styles.starEmpty}`}>&#9733;</span>)
    }
  }
  return <>{stars}</>
}

const Reviews = async () => {
  const supabase = createClient()
  const { data: reviews } = await supabase.from('reviews').select('id, title, content, rating')

  if (!reviews) {
    return <p>No Reviews found.</p>
  }

  return (
    <div>
      <h2>Reviews</h2>
      <div className={styles.reviews}>
        <>
        {reviews.map(review => (
          <div key={review.id} className={styles.reviewContainer}>
            <Link href={`/reviews/${review.id}`}>{review.title}</Link>
            <h4>{review.title}: {review.rating}</h4>
            <StarRating rating={review.rating} />
            <div className={styles.reviewInfo}>
              {/* <p>{review.user}</p> */}
              {/* <p>{formatDate(review.date)}</p> */}
            </div>
            <p>{review.content}</p>
          </div>
        ))} </>
      </div>
    </div>
  )
}

export default Reviews