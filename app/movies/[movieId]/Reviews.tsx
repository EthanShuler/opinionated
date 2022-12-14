import { formatDate } from '../../../utils/dateTime'
import styles from './styles.module.css'

const exampleReviews = [
  {
    id: 1,
    user: 'John Doe',
    title: 'SO GOOD',
    rating: 4,
    review: 'This movie was great! I loved it!',
    date: '2021-01-01'
  },
  {
    id: 2,
    user: 'Jane Doe',
    rating: 10,
    title: 'gargbage',
    review: 'This movie was bad! I no loved it!',
    date: '2021-02-02'
  },
]

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

const Reviews = () => {
  return (
    <div>
      <h2>Reviews</h2>
      <div className={styles.reviews}>
        {exampleReviews.map(review => (
          <div key={review.id} className={styles.reviewContainer}>
            <h4>{review.title}: {review.rating}</h4>
            <StarRating rating={review.rating} />
            <div className={styles.reviewInfo}>
              <p>{review.user}</p>
              <p>{formatDate(review.date)}</p>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews