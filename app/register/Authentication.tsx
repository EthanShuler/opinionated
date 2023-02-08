'use client'

import { useSupabase } from '../../components/supabase-provider'

// Supabase auth needs to be triggered client-side
const Login = () => {
  const { supabase, session } = useSupabase()

  const handleEmailLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: 'jon@supabase.com',
      password: 'password',
    })
  }

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  } 

  return session ? (
    <>
        <button onClick={handleLogout}>Logout</button>
        {session.user.email}
    </>
  ) : (
    <>
      <button onClick={handleGoogleLogin}>Google Login</button>
    </>
  )
}

export default Login