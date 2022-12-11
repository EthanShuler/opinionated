import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-5 bg-blue-500 flex'>
      <Link href='/' className='px-2 py-1 bg-white text-blue-500 rounded-lg'>
        Home
      </Link>
      <Link href='/movies' className='px-2 py-1 bg-white text-blue-500 rounded-lg ml-4'>
        Movies
      </Link>
    </header>
  )
}

export default Header