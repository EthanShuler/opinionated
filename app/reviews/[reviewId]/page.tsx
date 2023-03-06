import { createClient } from '../../../utils/supabase-server';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    reviewId: string
  }
}

const Review = async ({ params: { reviewId }}: PageProps) => {
  const supabase = createClient()
  const { data } = await supabase.from('reviews').select().match({ id: reviewId }).single()

  if (!data) {
    notFound()
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>

}

export default Review