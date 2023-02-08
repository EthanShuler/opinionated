import 'server-only'

import { Roboto } from '@next/font/google'
import SupabaseListener from '../components/supabase-listener'
import SupabaseProvider from '../components/supabase-provider'
import { createClient } from '../utils/supabase-server'
import './globals.css'
import Header from './Header'

export const revalidate  = 0

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Header />
          {children}
        </SupabaseProvider>
        
      </body>
    </html>
  )
}

export default RootLayout