"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themebutton = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <>
    <div className="absolute right-4" >
            {/* When the theme is dark, hide this div */}
      <div data-hide-on-theme="dark">
        <Image
          src="/light.png"
          alt="light"
          width={25}
          height={25}
          onClick={themebutton}
        />

      </div>

      {/* When the theme is light, hide this div */}
      <div data-hide-on-theme="light">
        <Image
          src="/dark.png"
          alt="dark"
          width={25}
          height={25}
          onClick={themebutton}
        />
      </div>
    </div>

    </>
  );
};

export default ThemeSwitch;
