"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
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

  // const pages = ["About", "Gallery", "PbPS", "Spooo", "MSLA", "Socials"];
  const pages = ["About", "PbPS", "Spooo", "MSLA", "Socials"];

  return (
    <>
      <header className={classes}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {pages.map((page, i) => (
            <li key={i}>
              <Link href={page}>{page}</Link>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </header>
    </>
  );
};

export default Header;
