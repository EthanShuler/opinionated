import { createClient } from '../../../utils/supabase-server';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    reviewId: string
  }
}

const Review = async ({ params: { reviewId }}: PageProps) => {
  const supabase = createClient()
  console.log(`id: ${reviewId}`)
  const { data } = await supabase.from('reviews').select().match({ id: reviewId }).single()
  console.log(`data: ${data}`)

  if (!data) {
    notFound()
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>

}

export default Review