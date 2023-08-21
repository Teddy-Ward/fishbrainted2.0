'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthForm() {
  const supabase = createClientComponentClient()
  const redirect = `${requestUrl.origin}/auth/callback` 
  return (
    <Auth
    supabaseClient={supabase}
    appearance={{
      // If you want to extend the default styles instead of overriding it, set this to true
      extend: true,
      theme: ThemeSupa,
      // Your custom classes
      className: {
        anchor: 'my-awesome-anchor',
        button: 'button',
      },
    }}
    providers={[]}

      redirectTo={redirect}
    />
  )
}