'use client'

import { createContext, useContext, useState } from 'react'
import { createClient} from '../utils/supabase-browser'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Session } from '@supabase/auth-helpers-nextjs'

type MaybeSession = Session | null

interface SupabaseContext {
  supabase: SupabaseClient;
  session: MaybeSession;
}

// @ts-ignore
const Context = createContext<SupabaseContext>()

const SupabaseProvider = ({ children, session }: {
  children: React.ReactNode;
  session: MaybeSession;
 }) => {
  const [supabase] = useState(() => createClient())

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => useContext(Context)

export default SupabaseProvider