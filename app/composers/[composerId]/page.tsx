import { Person } from '../../../typings'
import tmdbRequests from '../../../utils/tmdbRequests'
import Image from 'next/image'
import { tmdbUrlMediuim, tmdbUrlSmall } from '../../../utils/constants'

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
      <Image alt={`${composer.name} profile picture`}
        src={`${tmdbUrlMediuim}${composer.profile_path}`} width={300} height={450} />
    </div>
  )
}

export default Composer