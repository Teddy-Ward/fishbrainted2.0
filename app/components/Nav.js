"use client";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Nav = ({ pages, user }) => {
  const classes = `header flex flex-row`;

  const supabase = createClientComponentClient();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // eslint-disable-next-line no-console
      console.error("ERROR:", error);
    }
  }

  return (
    <>
      {/* <ul>
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
        </ul> */}
      <header className="header">
        <Link href="/" className="p-0 m-0">
          <img src="/ted_250.png" width="48px" className="fixed" />
        </Link>

        <div className="pr-5">
          <nav class="fill">
            {user ? (
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/account">Account</a>
                </li>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a href="#" onClick={handleSignOut}>
                    Logout
                  </a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
