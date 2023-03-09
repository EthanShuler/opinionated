import styles from './styles.module.css'

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

export default StarRating