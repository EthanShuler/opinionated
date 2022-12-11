import { Roboto } from '@next/font/google'
import './globals.css'
import Header from './Header'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const RootLayout =({ children, }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout