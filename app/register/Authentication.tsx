'use client'

import { useSupabase } from '../../components/supabase-provider'
import MyReviews from './MyReviews'

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
        <p>{session.user.email}</p>
        {/* <MyReviews userId={session.user.id} /> */}
    </>
  ) : (
    <>
      <button onClick={handleGoogleLogin}>Google Login</button>
    </>
  )
}

export default Login