import { Person } from '../../../typings'
import tmdbRequests from '../../../utils/tmdbRequests'

const fetchComposer = async (composerId: string) => {
  const res = await fetch(tmdbRequests.getPerson(composerId))
  const data: Person = await res.json()
  return data
}

interface PageProps {
  params: {
    composerId: string
  }
}

const Composer = async ({ params: { composerId }}: PageProps) => {
  const composer = await fetchComposer(composerId)

  return (
    <div>
      <h2>Composer</h2>
      <p>{composer.name}</p>
      <p>{composer.biography}</p>
    </div>
  )
}

export default Composer