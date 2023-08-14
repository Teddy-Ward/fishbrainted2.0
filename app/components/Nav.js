"use client";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';


const Nav = ({pages, user}) => {

  

  const classes = `header flex flex-row`;

  const supabase = createClientComponentClient();


    async function handleSignOut() {
        const { error } = await supabase.auth.signOut();
    
        if (error) {
          // eslint-disable-next-line no-console
          console.error('ERROR:', error);
        }
      }
  

  return (
    <>
      <header className={classes}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          {pages.map((page, i) => (
            <li key={i}>
              <Link href={"/" + page.toLowerCase()}>{page}</Link>
            </li>
          ))}
          {user ? 
            <li onClick={handleSignOut}><Link href="/">Logout</Link></li> 
            : 
            "" }
        </ul>
        <ThemeSwitch />
      </header>
    </>
  );
};

export default Nav;