import 'server-only'
import { formatDate } from '../../../utils/dateTime'
import styles from './styles.module.css'
import Link from 'next/link'
import { createClient } from '../../../utils/supabase-server'
import StarRating from '../../../components/StarRating'

// do not cache this page
export const revalidate = 0

interface ReviewsProps {
  movieId: number
}

const Reviews = async ({ movieId }: ReviewsProps) => {
  const supabase = createClient()
  const { data: reviews } = await supabase
  .from('reviews')
  .select('id, title, content, rating, profiles(full_name)')
  .eq('movie_id', movieId)

  if (!reviews) {
    return <p>No Reviews found.</p>
  }

  return (
    <div>
      <h2>Reviews</h2>
      <div className={styles.reviews}>
        <>
        {reviews.length == 0 ? (<p>No reviews</p>) : 
        reviews.map(review => (
            <Link key={review.id} href={`/reviews/${review.id}`} className={styles.reviewContainer}>
              <h3>{review.title}: {review.rating}</h3>
              <h4>{review.profiles.full_name}</h4>
              <StarRating rating={review.rating} />
              <div className={styles.reviewInfo}>
                <p>{review.content}</p>
              </div>
            </Link>
        ))} </>
      </div>
    </div>
  )
}

export default Reviews