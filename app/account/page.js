import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import AccountForm from './account-form'

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <AccountForm session={session} />
}