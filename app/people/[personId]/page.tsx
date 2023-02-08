import { Person } from '../../../typings'
import tmdbRequests from '../../../utils/tmdbRequests'
import Image from 'next/image'
import { tmdbUrlMediuim, tmdbUrlSmall } from '../../../utils/constants'

const fetchComposer = async (personId: string) => {
  const res = await fetch(tmdbRequests.getPerson(personId))
  const data: Person = await res.json()
  return data
}

interface PageProps {
  params: {
    personId: string
  }
}

const Person = async ({ params: { personId }}: PageProps) => {
  const person = await fetchComposer(personId)

  return (
    <div>
      <h2>Person</h2>
      <p>{person.name}</p>
      <p>{person.biography}</p>
      <Image alt={`${person.name} profile picture`}
        src={`${tmdbUrlMediuim}${person.profile_path}`} width={300} height={450} />
    </div>
  )
}

export default Person