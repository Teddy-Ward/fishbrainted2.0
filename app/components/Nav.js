"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';


const Nav = ({pages, user}) => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollhrefp = window.scrollY;
    const stickyClass = scrollhrefp >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };
  

  const classes = `header flex flex-row ${sticky}`;

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
          {pages.map((page, i) => (
            <li key={i}>
              <Link href={page.toLowerCase()}>{page}</Link>
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