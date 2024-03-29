import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient({ req, res })

  const { data: { session }, } = await supabase.auth.getSession()

  return res
}