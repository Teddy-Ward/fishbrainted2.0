
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Nav from './Nav';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies })
   let pages;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    pages = ["Login"];
  } else {
    pages = ["Profile", "Account"]
  }

  return <Nav pages={pages} user={user} />
};